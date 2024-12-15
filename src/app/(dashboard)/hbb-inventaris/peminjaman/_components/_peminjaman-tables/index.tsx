"use client";
import { DataTable } from "@/components/table/data-table";
import { Peminjaman } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  usePeminjamanTableFilters,
  NAMAPENGGUNA_OPTIONS,
  JENISASSET_OPTIONS,
  KLASIFIKASI_OPTIONS,
} from "./table-filters";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { Combine, Shapes, User } from "lucide-react";

export default function PeminjamanTable({
  data,
  totalData,
}: {
  data: Peminjaman[];
  totalData: number;
}) {
  const {
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    klasifikasiFilter,
    setKlasifikasiFilter,
    jenisAssetFilter,
    setJenisAssetFilter,
    namaPenggunaFilter,
    setNamaPenggunaFilter,
  } = usePeminjamanTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Peminjaman"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilter
          filterKey="klasifikasi"
          icon={Shapes}
          title="Klasifikasi"
          options={KLASIFIKASI_OPTIONS}
          setFilterValue={setKlasifikasiFilter}
          filterValue={klasifikasiFilter}
        />
        <DataTableFilter
          filterKey="jenisAsset"
          icon={Combine}
          title="Jenis Asset"
          options={JENISASSET_OPTIONS}
          setFilterValue={setJenisAssetFilter}
          filterValue={jenisAssetFilter}
        />
        <DataTableFilter
          filterKey="namaPengguna"
          icon={User}
          title="Nama Pengguna"
          options={NAMAPENGGUNA_OPTIONS}
          setFilterValue={setNamaPenggunaFilter}
          filterValue={namaPenggunaFilter}
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
