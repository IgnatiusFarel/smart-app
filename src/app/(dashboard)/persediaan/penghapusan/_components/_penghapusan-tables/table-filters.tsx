"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const GUDANG_OPTIONS = [
  { value: 'gudanggaram', label: 'Gudang Garam' },
  { value: 'gudangmild', label: 'Gudang Mild' }
];

export function usePenghapusanTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [gudangFilter, setGudangFilter] = useQueryState(
    'gudang',
    searchParams.gudang.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setGudangFilter(null);
    
    setPage(1);
  }, [setSearchQuery, setGudangFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!gudangFilter;
  }, [searchQuery, gudangFilter]);

  return {
    searchQuery,
    setSearchQuery,
    gudangFilter,
    setGudangFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
