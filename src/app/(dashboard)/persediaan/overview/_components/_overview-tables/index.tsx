"use client";
import { DataTable } from "@/components/table/data-table";
import { TabelMutasi } from "@/constants/data";
import { columns } from "./columns";
import { useState } from "react";
import { SubHeading } from "@/components/ui/sub-heading";
import { Button } from "@/components/ui/button";

export default function TabelMutasiTable({
  data,
  totalData,
}: {
  data: TabelMutasi[];
  totalData: number;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data berdasarkan searchQuery
  const filteredData = data.filter((item) =>
    item.periode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SubHeading title="Tabel Mutasi" />

        <div className="flex items-center gap-2">
          {/* <SearchInput onChange={(value) => setSearchQuery(value)} /> */}
          <Button className="w-[100px]">Export</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredData}
          totalItems={totalData}
        />
      </div>
    </div>
  );
}
