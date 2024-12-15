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
    icon: <Trash name="jenis-laporan" />,
    title: "Jenis Laporan",
    description: "Jenis Laporan Adalah / Kasih Link aja",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    icon: <Trash name="kelompok" />,
    title: "Kelompok",
    description: "Kelompok adalah / Kasih link aja",
    options: ["Option A", "Option B", "Option C"],
  },
  {
    icon: <Trash name="nama-kode-barang" />,
    title: "Nama dan Kode Barang/Material",
    description: "Nama dan Kode Barang / Material adalah",
    options: ["Option X", "Option Y", "Option Z"],
  },
  {
    icon: <Trash name="status-barang" />,
    title: "Status Barang/Material",
    description: "Status Barang / Material adalah",
    options: ["Option Alpha", "Option Beta", "Option Gamma"],
  },
  {
    icon: <Trash name="lokasi-gudang" />,
    title: "Lokasi Gudang",
    description: "Lokasi Gudang adalah",
    options: ["Option Red", "Option Blue", "Option Green"],
  },
  {
    icon: <Trash name="kelompok" />,
    title: "Kelompok",
    description: "Kelompok adalah",
    options: ["Option 10%", "Option 20%", "Option 30%"],
  },
  {
    icon: <Trash name="nama-kode-proyek" />,
    title: "Nama dan Kode Proyek",
    description: "Nama dan Kode Proyek adaalah",
    options: ["Option 10%", "Option 20%", "Option 30%"],
  },
  {
    icon: <Trash name="kategori" />,
    title: "Kategori",
    description: "Kategori adalah",
    options: ["Option 10%", "Option 20%", "Option 30%"],
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
