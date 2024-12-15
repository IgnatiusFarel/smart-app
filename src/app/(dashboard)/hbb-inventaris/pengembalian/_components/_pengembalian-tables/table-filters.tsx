"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const JENISASSET_OPTIONS = [
  { value: "jenis1", label: "Jenis abc" },
  { value: "jenis2", label: "Jenis xyz" },
];

export const KLASIFIKASI_OPTIONS = [
  { value: "kelompok1", label: "Kelompok 1" },
  { value: "kelompok2", label: "Kelompok 2" },
];

export const NAMAPENGGUNA_OPTIONS = [
  { value: "ignatiusloyola", label: "Ignatius Loyola" },
  { value: "farelkusumadewa", label: "Farel Kusuma Dewa" },
];

export function usePengembalianTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    "search",
    searchParams.q.withOptions({ shallow: false }).withDefault("")
  );

  const [jenisAssetFilter, setJenisAssetFilter] = useQueryState(
    "jenis-asset",
    searchParams.jenisAsset.withOptions({ shallow: false }).withDefault("")
  );

  const [klasifikasiFilter, setKlasifikasiFilter] = useQueryState(
    "klasifikasi",
    searchParams.klasifikasi.withOptions({ shallow: false }).withDefault("")
  );

  const [namaPenggunaFilter, setNamaPenggunaFilter] = useQueryState(
    "nama-pengguna",
    searchParams.namaPengguna.withOptions({ shallow: false }).withDefault("")
  );

  const [page, setPage] = useQueryState(
    "page",
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setJenisAssetFilter(null);
    setKlasifikasiFilter(null);
    setNamaPenggunaFilter(null);

    setPage(1);
  }, [
    setSearchQuery,
    setJenisAssetFilter,
    setKlasifikasiFilter,
    setNamaPenggunaFilter,
    setPage,
  ]);

  const isAnyFilterActive = useMemo(() => {
    return (
      !!searchQuery ||
      !!jenisAssetFilter ||
      !!klasifikasiFilter ||
      !!namaPenggunaFilter
    );
  }, [searchQuery, jenisAssetFilter, klasifikasiFilter, namaPenggunaFilter]);

  return {
    searchQuery,
    setSearchQuery,
    klasifikasiFilter,
    setKlasifikasiFilter,
    jenisAssetFilter,
    setJenisAssetFilter,
    namaPenggunaFilter,
    setNamaPenggunaFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive,
  };
}
