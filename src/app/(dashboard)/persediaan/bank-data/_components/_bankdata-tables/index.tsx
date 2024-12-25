"use client";
import { DataTable } from "@/components/table/data-table";
import { BankData } from "@/constants/data";
import { DataTableSearch } from "@/components/table/data-table-search";
import { useBankDataTableFilters } from "./table-filters";

export default function BankDataTable({
  data,
  totalData,
  columns
}: {
  data: BankData[];
  totalData: number;
  columns: any[];
}) {
  const { setPage, searchQuery, setSearchQuery } = useBankDataTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <DataTableSearch
        searchKey="Bank Data"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setPage={setPage}
      />

      <DataTable columns={columns} data={searchData} totalItems={totalData} />
    </div>
  );
}
