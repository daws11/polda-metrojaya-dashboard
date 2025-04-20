"use client";

import { useEffect, useState } from "react";
import { Smartphone } from "lucide-react";

export function SmallScreenIndicator() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!isSmallScreen) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 p-2 rounded-full shadow-lg z-50 flex items-center">
      <Smartphone className="h-4 w-4 mr-1" />
      <span className="text-xs">Layar Kecil</span>
    </div>
  );
}