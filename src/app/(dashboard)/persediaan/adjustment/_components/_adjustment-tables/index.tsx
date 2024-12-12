"use client";

import { DataTable } from "@/components/table/data-table";
import { Adjustment } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  GUDANG_OPTIONS,
  KELOMPOK_OPTIONS,
  KODEPROYEK_OPTIONS,
  NAMAPROYEK_OPTIONS,
  useAdjustmentTableFilters,
} from "./table-filters";
import { Group, Warehouse } from "lucide-react";

export default function AdjustmentTable({
  data,
  totalData,
}: {
  data: Adjustment[];
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
    kodeProyekFilter,
    setKodeProyekFilter,
    namaProyekFilter,
    setNamaProyekFilter,
    gudangFilter,
    setGudangFilter,
  } = useAdjustmentTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Adjustment"
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
          filterKey="kodeProyek"
          icon={Group}
          title="Kode Proyek"
          options={KODEPROYEK_OPTIONS}
          setFilterValue={setKodeProyekFilter}
          filterValue={kodeProyekFilter}
        />
        <DataTableFilter
          filterKey="namaProyek"
          icon={Group}
          title="Nama Proyek"
          options={NAMAPROYEK_OPTIONS}
          setFilterValue={setNamaProyekFilter}
          filterValue={namaProyekFilter}
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
