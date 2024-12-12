"use client";
import { columns } from "./columns";
import { Pengembalian } from "@/constants/data";
import { DataTable } from "@/components/table/data-table";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  Group,
  SquareDashedKanban,
  SquareKanban,
  Warehouse,
} from "lucide-react";
import usePengembalianTableFilters, {
  GUDANG_OPTIONS,
  KODEPROYEK_OPTIONS,
  NAMAPROYEK_OPTIONS,
  KELOMPOK_OPTIONS
} from "./table-filters";

export default function PengembalianTable({
  data,
  totalData,
}: {
  data: Pengembalian[];
  totalData: number;
}) {
  const {
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    kodeProyekFilter,
    setKodeProyekFilter,
    kelompokFilter,
    setKelompokFilter,
    gudangFilter,
    setGudangFilter,
    namaProyekFilter,
    setNamaProyekFilter,
  } = usePengembalianTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Pengembalian"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilter
          filterKey="kode-proyek"
          icon={SquareDashedKanban}
          title="Kode Proyek"
          options={KODEPROYEK_OPTIONS}
          setFilterValue={setKodeProyekFilter}
          filterValue={kodeProyekFilter}
        />
        <DataTableFilter
          filterKey="nama-proyek"
          icon={SquareKanban}
          title="Nama Proyek"
          options={NAMAPROYEK_OPTIONS}
          setFilterValue={setNamaProyekFilter}
          filterValue={namaProyekFilter}
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
      {/* <SearchInput onChange={(value) => setSearchQuery(value)} /> */}

      {/* <div className="overflow-x-auto"> */}
      <DataTable columns={columns} data={searchData} totalItems={totalData} />
      {/* </div> */}
    </div>
  );
}
