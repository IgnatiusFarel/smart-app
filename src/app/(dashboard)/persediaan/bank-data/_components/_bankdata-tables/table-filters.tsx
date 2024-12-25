"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export function useBankDataTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);

    setPage(1);
  }, [setSearchQuery, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery;
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
