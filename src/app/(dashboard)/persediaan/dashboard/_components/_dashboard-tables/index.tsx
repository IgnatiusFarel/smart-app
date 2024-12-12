"use client";
import { DataTable } from "@/components/table/data-table";
import { TabelMutasi } from "@/constants/data";
import { columns } from "./columns";
import { useState } from "react";
import { SubHeading } from "@/components/ui/sub-heading";
import { Button } from "@/components/ui/button";
import { DataTableSearch } from "@/components/table/data-table-search";
import PageContainer from "@/components/layout/page-container";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export default function TabelMutasiTable({
  data,
  totalData,
}: {
  data: TabelMutasi[];
  totalData: number;
}) {

  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (    
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SubHeading title="Tabel Mutasi" />

        <div className="flex items-center gap-2">          
        <DataTableSearch
          searchKey="Tabel Mutasi"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery} 
          setPage={setPage}
        />
          <Button className="w-[100px]">Export</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={searchData}
          totalItems={totalData}
        />
      </div>
    </div>    
  );
}
