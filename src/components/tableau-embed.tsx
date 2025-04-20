"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider"; // Import useTheme

interface TableauEmbedProps {
  id: string;
  embedCode: string;
  title: string;
}

export function TableauEmbed({ id, embedCode, title }: TableauEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme(); // Gunakan tema dari ThemeProvider

  useEffect(() => {
    if (containerRef.current) {
      // Membersihkan container sebelum menambahkan embed baru
      containerRef.current.innerHTML = "";

      // Membuat div untuk tableau placeholder
      const placeholderDiv = document.createElement("div");
      placeholderDiv.className = "tableauPlaceholder relative";
      placeholderDiv.id = id;
      placeholderDiv.style.position = "relative";
      placeholderDiv.style.transform = "scale(1.02)"; // Mengatur skala menjadi lebih kecil
      placeholderDiv.style.transformOrigin = "center";
      placeholderDiv.style.width = "100%";
      placeholderDiv.style.height = "100%";
      placeholderDiv.innerHTML = embedCode;

      // Menambahkan overlay hanya jika tema adalah 'dark'
      if (theme === "dark") {
        const overlayDiv = document.createElement("div");
        overlayDiv.className = "absolute inset-0 bg-black/50 pointer-events-none";
        placeholderDiv.appendChild(overlayDiv);
      }

      containerRef.current.appendChild(placeholderDiv);

      // Menjalankan script untuk tableau
      const scriptContent = embedCode.match(/<script type='text\/javascript'>([\s\S]*?)<\/script>/);
      if (scriptContent && scriptContent[1]) {
        // eslint-disable-next-line no-eval
        eval(scriptContent[1]);
      }
    }
  }, [embedCode, id, theme]); // Tambahkan 'theme' ke dependency array

  return (
    <Card className="w-full h-full">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div
          ref={containerRef}
          className="w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden relative"
        />
      </CardContent>
    </Card>
  );
}