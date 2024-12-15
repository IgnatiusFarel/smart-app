"use client";
import { DataTable } from "@/components/table/data-table";
import { TabelMutasi } from "@/constants/data";
import { columns } from "./columns";
import { SubHeading } from "@/components/ui/sub-heading";
import { Button, buttonVariants } from "@/components/ui/button";
import { DataTableSearch } from "@/components/table/data-table-search";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

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
           <Button
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Upload className="mr-2 h-4 w-4" /> Export
          </Button>
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
