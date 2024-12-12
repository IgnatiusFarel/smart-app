"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const GUDANG_OPTIONS = [
  { value: 'gudangku', label: 'Gudang Ku' },
  { value: 'gudangkau', label: 'Gudang Kau' }
];

export const KELOMPOK_OPTIONS = [
  { value: 'kelompok1', label: 'Kelompok 1' },
  { value: 'kelompok2', label: 'Kelompok 2' }
];

export const KATEGORI_OPTIONS = [
  { value: 'kategorixyz', label: 'Kelompok XYZ' },
  { value: 'kategoriabc', label: 'Kelompok ABC' }
];

export function useStockOpnameTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [gudangFilter, setGudangFilter] = useQueryState(
    'gudang',
    searchParams.gudang.withOptions({ shallow: false }).withDefault('')
  );

  const [kelompokFilter, setKelompokFilter] = useQueryState(
    'kelompok',
    searchParams.kelompok.withOptions({ shallow: false }).withDefault('')
  );

  const [kategoriFilter, setKategoriFilter] = useQueryState(
    'kategori',
    searchParams.kategori.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const isAnyFilterActive = useMemo(() => {
    return (
      !!searchQuery || 
      !!gudangFilter || 
      !!kelompokFilter || 
      !!kategoriFilter
    );
  }, [searchQuery, gudangFilter, kelompokFilter, kategoriFilter]);
  
  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setGudangFilter(null);
    setKategoriFilter(null);
    setKelompokFilter(null);
    setPage(1);
  }, [setSearchQuery, setGudangFilter, setKelompokFilter, setPage, setKategoriFilter]);
  

  return {
    searchQuery,
    setSearchQuery,
    kategoriFilter,
    setKategoriFilter,
    kelompokFilter,
    setKelompokFilter,
    gudangFilter,
    setGudangFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
