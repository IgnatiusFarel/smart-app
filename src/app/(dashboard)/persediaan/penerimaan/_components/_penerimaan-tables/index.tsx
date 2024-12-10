"use client";
import { DataTable } from "@/components/table/data-table";
import { Penerimaan } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  usePenerimaanTableFilters,
  GUDANG_OPTIONS,
  KELOMPOK_OPTIONS,
} from "./table-filters";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { Group, Warehouse } from "lucide-react";

export default function PenerimaanTable({
  data,
  totalData,
}: {
  data: Penerimaan[];
  totalData: number;
}) {
  const {
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    kelompokFilter,
    setKelompokFilter,
    gudangFilter,
    setGudangFilter,
  } = usePenerimaanTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Penerimaan"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilter
          filterKey="kelompok"
          icon={Group}
          title="Kelompok"
          options={KELOMPOK_OPTIONS}
          setFilterValue={setKelompokFilter}
          filterValue={kelompokFilter}
        />
        <DataTableFilter
          filterKey="gudang"
          icon={Warehouse}
          title="Gudang"
          options={GUDANG_OPTIONS}
          setFilterValue={setGudangFilter}
          filterValue={gudangFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      {/* <div className="overflow-x-auto"> */}
        <DataTable columns={columns} data={searchData} totalItems={totalData} />
      {/* </div> */}
    </div>
  );
}
