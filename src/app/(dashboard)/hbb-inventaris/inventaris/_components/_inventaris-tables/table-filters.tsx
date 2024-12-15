"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const LOKASIPENEMPATAN_OPTIONS = [
  { value: 'dyogyakarta', label: 'Djogjakarta' },
  { value: 'djakarta', label: 'Djakarta' }
];

export const KATEGORI_OPTIONS = [
  { value: 'kategoriabc', label: 'Kelompok ABC' },
  { value: 'kategorixyz', label: 'Kategori XYZ' }
];

export function useInventarisTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [kategoriFilter, setKategoriFilter] = useQueryState(
    'kategori',
    searchParams.kategori.withOptions({ shallow: false }).withDefault('')
  );

  const [lokasiPenempatanFilter, setLokasiPenempatanFilter] = useQueryState(
    'lokasi-penempatan',
    searchParams.lokasiPenempatan.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setKategoriFilter(null);
    setLokasiPenempatanFilter(null);

    setPage(1);
  }, [setSearchQuery, setKategoriFilter, setLokasiPenempatanFilter,  setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!kategoriFilter || !!lokasiPenempatanFilter ;
  }, [searchQuery,kategoriFilter, lokasiPenempatanFilter ]);

  return {
    searchQuery,
    setSearchQuery,
    kategoriFilter,
    setKategoriFilter,
    lokasiPenempatanFilter,
    setLokasiPenempatanFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
