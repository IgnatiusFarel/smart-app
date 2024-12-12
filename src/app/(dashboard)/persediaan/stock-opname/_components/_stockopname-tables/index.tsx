"use client";
import { DataTable } from "@/components/table/data-table";
import { StockOpname } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  GUDANG_OPTIONS,
  KATEGORI_OPTIONS,
  KELOMPOK_OPTIONS,
  useStockOpnameTableFilters,
} from "./table-filters";
import { Group, SlidersHorizontal, Warehouse } from "lucide-react";

export default function StockOpnameTable({
  data,
  totalData,
}: {
  data: StockOpname[];
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
    kategoriFilter,
    setKategoriFilter,
    gudangFilter,
    setGudangFilter,
  } = useStockOpnameTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Stock Opname"
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
          filterKey="kategori"
          icon={SlidersHorizontal}
          title="Kategori"
          options={KATEGORI_OPTIONS}
          setFilterValue={setKategoriFilter}
          filterValue={kategoriFilter}
        />
        <DataTableFilter
          filterKey="gudang"
          title="Gudang"
          icon={Warehouse}
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
