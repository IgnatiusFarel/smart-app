"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const GUDANG_OPTIONS = [
  { value: 'gudanggaram', label: 'Gudang Garam' },
  { value: 'gudangmild', label: 'Gudang Mild' }
];

export const KELOMPOK_OPTIONS = [
  { value: 'kelompok1', label: 'Kelompok 1' },
  { value: 'kelompok2', label: 'Kelompok 2' }
];

export function usePenerimaanTableFilters() {
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

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setGudangFilter(null);
    setKelompokFilter(null);

    setPage(1);
  }, [setSearchQuery, setGudangFilter, setKelompokFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!gudangFilter || !!kelompokFilter;
  }, [searchQuery, gudangFilter, kelompokFilter]);

  return {
    searchQuery,
    setSearchQuery,
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
