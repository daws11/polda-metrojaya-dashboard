"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { StatsCards } from "@/components/stats-cards";
import Image from 'next/image';

export function Header() {


  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Image
            src="/polri.png"
            alt="Logo Polda Metro Jaya"
            width={64} // Increased from 48 to 64
            height={64} // Increased from 48 to 64
            className="object-contain"
          />
          <Image
            src="/tik.png"
            alt="Logo Polda Metro Jaya"
            width={64} // Increased from 48 to 64
            height={64} // Increased from 48 to 64
            className="object-contain"
          />
        </div>
          <div>
            <h1 className="text-3xl font-bold">Dashboard Kriminal Polda Metro Jaya 2023</h1>
            <p className="text-muted-foreground mt-1">
              Visualisasi data kriminal di wilayah Polda Metro Jaya
            </p>
          </div>
          <ThemeToggle />
        </div>
        
        <StatsCards />
      </div>
    </div>
  );
}