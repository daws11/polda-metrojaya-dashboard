import { ReactNode, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const placeholderRef = useRef<HTMLDivElement>(null);

  const handleTabClick = () => {
    if (placeholderRef.current) {
      placeholderRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="container mx-auto py-4">
      <Header />
      
      <Tabs defaultValue="overview" className="w-full mt-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview" onClick={handleTabClick}>Overview</TabsTrigger>
          <TabsTrigger value="map" onClick={handleTabClick}>Peta</TabsTrigger>
          <TabsTrigger value="pie" onClick={handleTabClick}>Pie Chart</TabsTrigger>
          <TabsTrigger value="bar" onClick={handleTabClick}>Bar Chart</TabsTrigger>
          <TabsTrigger value="line" onClick={handleTabClick}>Line Chart</TabsTrigger>
          <TabsTrigger value="all" onClick={handleTabClick}>Semua Data</TabsTrigger>
        </TabsList>
        
        <div ref={placeholderRef} className="mt-6">
          {children}
        </div>
      </Tabs>
    </div>
  );
}