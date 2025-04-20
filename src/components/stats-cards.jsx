import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "react-countup";

export function StatsCards() {
  // Generate random numbers for stats
  const totalCases = Math.floor(Math.random() * 100000) + 10000; // Random between 10,000 - 100,000
  const resolvedCases = Math.floor(totalCases * 0.7); // 70% of total cases
  const highestRegionCases = Math.floor(totalCases * 0.26); // 26% of total cases
  const highestCrimeCases = Math.floor(totalCases * 0.37); // 37% of total cases

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Kasus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <CountUp end={totalCases} duration={2} separator="," />
          </div>
          <p className="text-xs text-muted-foreground">+15% dari tahun sebelumnya</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Kasus Terselesaikan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <CountUp end={resolvedCases} duration={2} separator="," />
          </div>
          <p className="text-xs text-muted-foreground">70.6% dari total kasus</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Wilayah Tertinggi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Jakarta Pusat</div>
          <p className="text-xs text-muted-foreground">
            <CountUp end={highestRegionCases} duration={2} separator="," /> kasus (26.3%)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Jenis Kriminal Tertinggi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Pencurian</div>
          <p className="text-xs text-muted-foreground">
            <CountUp end={highestCrimeCases} duration={2} separator="," /> kasus (37%)
          </p>
        </CardContent>
      </Card>
    </div>
  );
}