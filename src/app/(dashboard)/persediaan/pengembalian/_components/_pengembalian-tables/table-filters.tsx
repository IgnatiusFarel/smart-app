"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const KODEPROYEK_OPTIONS = [
  { value: "proyekhambalang", label: "Proyek Hambalang" },
  { value: "proyekikn", label: "Proyek IKN" },
];

export const GUDANG_OPTIONS = [
  { value: "gudangsukoharjo", label: "Gudang Sukoharjo" },
  { value: "gudangmlati", label: "Gudang Mlati" },
];

export const NAMAPROYEK_OPTIONS = [
  { value: "proyekpakjoko", label: "Proyek Pak Joko Mabel" },
  { value: "proyekpakowok", label: "Proyek Pak Okoj Waskita Jaya" },
];

export const KELOMPOK_OPTIONS = [
  { value: "kelompok8", label: "Kelompok 8" },
  { value: "Kelompokwell", label: "Kelompok Well" },
];

export default function usePengembalianTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    "Search",
    searchParams.q
      .withOptions({ shallow: false, throttleMs: 1000 })
      .withDefault("")
  );

  const [kelompokFilter, setKelompokFilter] = useQueryState(
    "kelompok",
    searchParams.kelompok.withOptions({ shallow: false }).withDefault("")
  );

  const [gudangFilter, setGudangFilter] = useQueryState(
    "gudang",
    searchParams.gudang.withOptions({ shallow: false }).withDefault("")
  );

  const [kodeProyekFilter, setKodeProyekFilter] = useQueryState(
    "kode-proyek",
    searchParams.kodeProyek.withOptions({ shallow: false }).withDefault("")
  );

  const [namaProyekFilter, setNamaProyekFilter] = useQueryState(
    "nama-proyek",
    searchParams.namaProyek.withOptions({ shallow: false }).withDefault("")
  );

  const [page, setPage] = useQueryState(
    "page",
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setKodeProyekFilter(null);
    setKelompokFilter(null);
    setGudangFilter(null);
    setNamaProyekFilter(null);

    setPage(1);
  }, [setSearchQuery, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return (
      !!searchQuery ||
      !!kodeProyekFilter ||
      !!kelompokFilter ||
      !!gudangFilter ||
      !!namaProyekFilter
    );
  }, [
    searchQuery,
    kodeProyekFilter,
    kelompokFilter,
    gudangFilter,
    namaProyekFilter,
  ]);

  return {
    page,
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    kelompokFilter,
    setKelompokFilter,
    kodeProyekFilter,
    setKodeProyekFilter,
    gudangFilter,
    setGudangFilter,
    namaProyekFilter,
    setNamaProyekFilter,
  };
}
