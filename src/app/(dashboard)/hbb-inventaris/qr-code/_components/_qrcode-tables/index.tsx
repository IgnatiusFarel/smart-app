"use client";

import { DataTable } from "@/components/table/data-table";
import { HBBQRCode } from "@/constants/data";
import { columns } from "./columns";
import { searchParams } from "@/lib/searchparams";
import { useQueryState } from "nuqs";
import { DataTableSearch } from "@/components/table/data-table-search";

export default function QRCodeTable({
  data,
  totalData,
}: {
  data: HBBQRCode[];
  totalData: number;
}) {
  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    searchParams.q.withOptions({ shallow: false }).withDefault("")
  );

  const [page, setPage] = useQueryState(
    "page",
    searchParams.page.withDefault(1)
  );

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
        <DataTableSearch 
        searchKey="QR Code"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
        />

        
      <DataTable columns={columns} data={searchData} totalItems={totalData} />
    </div>
  );
}
