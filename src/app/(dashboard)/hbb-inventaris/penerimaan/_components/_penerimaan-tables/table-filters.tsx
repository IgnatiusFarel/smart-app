"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const JENISASSET_OPTIONS = [
  { value: 'jenisabc', label: 'Jenis abc' },
  { value: 'jenisxyz', label: 'Jenis xyz' }
];

export const KLASIFIKASI_OPTIONS = [
  { value: 'kelompok1', label: 'Kelompok 1' },
  { value: 'kelompok2', label: 'Kelompok 2' }
];

export const NAMAPENYEDIA_OPTIONS = [
  { value: 'ignatiusloyola', label: 'Ignatius Loyola'},
  { value: 'farelkusumadewa', label: 'Farel Kusuma Dewa'},
]

export function usePenerimaanTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [jenisAssetFilter, setJenisAssetFilter] = useQueryState(
    'jenis-asset',
    searchParams.jenisAsset.withOptions({ shallow: false }).withDefault('')
  );

  const [klasifikasiFilter, setKlasifikasiFilter] = useQueryState(
    'klasifikasi',
    searchParams.klasifikasi.withOptions({ shallow: false }).withDefault('')
  );

  const [namaPenyediaFilter, setNamaPenyediaFilter] = useQueryState(
    'nama-penyedia',
    searchParams.namaPenyedia.withOptions({ shallow: false }).withDefault('')
  )

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setJenisAssetFilter(null);
    setKlasifikasiFilter(null);
    setNamaPenyediaFilter(null);

    setPage(1);
  }, [setSearchQuery, setJenisAssetFilter, setKlasifikasiFilter, setNamaPenyediaFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!jenisAssetFilter || !!klasifikasiFilter || !!namaPenyediaFilter;
  }, [searchQuery, jenisAssetFilter, klasifikasiFilter, namaPenyediaFilter]);

  return {
    searchQuery,
    setSearchQuery,
    klasifikasiFilter,
    setKlasifikasiFilter,
    jenisAssetFilter,
    setJenisAssetFilter,
    namaPenyediaFilter,
    setNamaPenyediaFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
