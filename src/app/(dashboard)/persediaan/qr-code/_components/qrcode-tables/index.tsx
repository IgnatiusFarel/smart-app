"use client";
import { DataTable } from "@/components/table/data-table";
import { QRCode } from "@/constants/data";
import { columns } from "./columns";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { DataTableSearch } from "@/components/table/data-table-search";
import { useQRCodeTableFilters } from "./table-filters";

export default function QRCodeTable({
  data,
  totalData,
}: {
  data: QRCode[];
  totalData: number;
}) {

    const { setPage, searchQuery, setSearchQuery } = useQRCodeTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">

      <DataTableSearch
        searchKey="QR Code"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />
      <div className="md:ml-auto space-x-2">
        <Button className={cn(buttonVariants({ variant: "outline" }))}>
       Print Vertical QR for Selected Data
        </Button>
        <Button className={cn(buttonVariants({ variant: "outline" }))}>
     Print Horizontal QR for Selected Data
        </Button>
      </div>

      </div>
    
      <DataTable columns={columns} data={searchData} totalItems={totalData} />
    </div>
  );
}
