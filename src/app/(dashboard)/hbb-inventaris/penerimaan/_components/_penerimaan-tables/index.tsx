"use client";
import { DataTable } from "@/components/table/data-table";
import { Penerimaan } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  usePenerimaanTableFilters,
  NAMAPENYEDIA_OPTIONS,
  JENISASSET_OPTIONS,
  KLASIFIKASI_OPTIONS,
} from "./table-filters";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { BookType, Combine, Group, Shapes, User2, Warehouse } from "lucide-react";

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
    klasifikasiFilter,
    setKlasifikasiFilter,
    jenisAssetFilter,
    setJenisAssetFilter,
    namaPenyediaFilter,
    setNamaPenyediaFilter,
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
          filterKey="namaPenyedia"
          icon={User2}
          title="Nama Penyedia"
          options={NAMAPENYEDIA_OPTIONS}
          setFilterValue={setNamaPenyediaFilter}
          filterValue={namaPenyediaFilter}
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
