"use client";
import { DataTable } from "@/components/table/data-table";
import { Inventaris } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  useInventarisTableFilters,
  LOKASIPENEMPATAN_OPTIONS,
  KATEGORI_OPTIONS,
} from "./table-filters";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { MapPinHouse, SlidersHorizontal } from "lucide-react";

export default function PenerimaanTable({
  data,
  totalData,
}: {
  data: Inventaris[];
  totalData: number;
}) {
  const {
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    kategoriFilter,
    setKategoriFilter,
    lokasiPenempatanFilter,
    setLokasiPenempatanFilter,
  } = useInventarisTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Inventaris"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilter
          filterKey="kategori"
          icon={SlidersHorizontal}
          title="Kategori"
          options={KATEGORI_OPTIONS}
          setFilterValue={setKategoriFilter}
          filterValue={kategoriFilter}
        />
        <DataTableFilter
          filterKey="lokasiPenempatan"
          icon={MapPinHouse}
          title="Lokasi Penempatan"
          options={LOKASIPENEMPATAN_OPTIONS}
          setFilterValue={setLokasiPenempatanFilter}
          filterValue={lokasiPenempatanFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable columns={columns} data={searchData} totalItems={totalData} />
    </div>
  );
}
