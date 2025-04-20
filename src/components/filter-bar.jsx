// components/filter-bar.jsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FilterBar({ onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="w-full md:w-auto">
        <Select onValueChange={(value) => onFilterChange('year', value)}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Pilih Tahun" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full md:w-auto">
        <Select onValueChange={(value) => onFilterChange('region', value)}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Pilih Wilayah" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Wilayah</SelectItem>
            <SelectItem value="jakarta-pusat">Jakarta Pusat</SelectItem>
            <SelectItem value="jakarta-utara">Jakarta Utara</SelectItem>
            <SelectItem value="jakarta-barat">Jakarta Barat</SelectItem>
            <SelectItem value="jakarta-selatan">Jakarta Selatan</SelectItem>
            <SelectItem value="jakarta-timur">Jakarta Timur</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}