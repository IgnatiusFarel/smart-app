import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 

const reports = [
  {
    icon: <Trash name="jenisLaporan" />,
    title: "Jenis Laporan",
    description: "Jenis Laporan Adalah / Kasih Link aja",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    icon: <Trash name="klasifikasi" />,
    title: "Klasifikasi",
    description: "Klasifika adalah / Kasih link aja",
    options: ["Option A", "Option B", "Option C"],
  },
  {
    icon: <Trash name="jenisAsset" />,
    title: "Jenis Asset",
    description: "Jenis Asset adalah",
    options: ["Option X", "Option Y", "Option Z"],
  },
  {
    icon: <Trash name="lokasiPenempatan" />,
    title: "Lokasi Penempatan",
    description: "Lokasi Penempatan adalah",
    options: ["Option Alpha", "Option Beta", "Option Gamma"],
  },
];

export default function LaporanType() {
  return (
    <Card className="mx-auto w-full">
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-lg">
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 text-primary bg-secondary rounded-full">
                {report.icon}
              </div>
              <div>
                <h2 className="text-sm font-medium">{report.title}</h2>
                <p className="text-xs text-muted-foreground">
                  {report.description}
                </p>
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {report.options.map((option, idx) => (
                  <SelectItem key={idx} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
        <div className="col-span-full flex justify-center space-x-4 mt-6">
          <Button className={cn(buttonVariants({ variant: "default" }))}>
            Generate Filtered Reports
          </Button>
          <Button variant="outline">Clear Filters</Button>
        </div>
      </CardContent>
    </Card>
  );
}
