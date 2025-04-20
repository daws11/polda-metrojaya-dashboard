"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Monitor, Smartphone } from "lucide-react";

export function ResponsiveAlert() {
  // Kita hanya perlu state untuk dialog
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fungsi untuk memeriksa ukuran layar
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 768; // 768px adalah breakpoint untuk md di Tailwind
      
      // Hanya tampilkan dialog jika layar kecil dan belum pernah ditutup sebelumnya
      if (isSmall && !localStorage.getItem('responsiveAlertDismissed')) {
        setOpen(true);
      }
    };

    // Periksa ukuran layar saat komponen dimount
    checkScreenSize();

    // Tambahkan event listener untuk resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleDismiss = () => {
    setOpen(false);
    // Simpan preferensi pengguna di localStorage agar tidak muncul lagi
    localStorage.setItem('responsiveAlertDismissed', 'true');
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center">
            <Smartphone className="mr-2 h-5 w-5 text-orange-500" />
            Tampilan Optimal pada Layar Besar
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-4">
              Dashboard ini dirancang untuk tampilan optimal pada layar yang lebih besar seperti laptop atau desktop.
            </p>
            <div className="flex items-center justify-center p-4 bg-muted rounded-md">
              <Monitor className="h-10 w-10 text-primary" />
              <span className="ml-2 text-sm">
                Untuk pengalaman terbaik, silakan akses dashboard ini menggunakan perangkat dengan layar yang lebih besar.
              </span>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleDismiss}>
            Saya Mengerti
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}