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

export const NAMAPROYEK_OPTIONS = [
  { value: 'proyekpaktarno', label: 'Proyek Pak Tarno' },
  { value: 'proyekpakencang', label: 'Proyek Pak Encang' }
];

export const KODEPROYEK_OPTIONS = [
  { value: 'abc-xyz', label: 'ABC-XYZ-123-098' },
  { value: 'fgh-jkl', label: 'FGH-JKL-567' }
];

export function useAdjustmentTableFilters() {
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

  const [kodeProyekFilter, setKodeProyekFilter] = useQueryState(
    'kode-proyek',
    searchParams.kodeProyek.withOptions({ shallow: false }).withDefault('')
  );

  const [namaProyekFilter, setNamaProyekFilter] = useQueryState(
    'nama-proyek',
    searchParams.namaProyek.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setGudangFilter(null);
    setKelompokFilter(null);
    setNamaProyekFilter(null);
    setKodeProyekFilter(null);

    setPage(1);
  }, [setSearchQuery, setGudangFilter, setKelompokFilter, setNamaProyekFilter, setKodeProyekFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!gudangFilter || !!kelompokFilter || !!kodeProyekFilter || !!namaProyekFilter;
  }, [searchQuery, gudangFilter, kelompokFilter, kodeProyekFilter, namaProyekFilter]);

  return {
    searchQuery,
    setSearchQuery,
    kelompokFilter,
    setKelompokFilter,
    kodeProyekFilter,
    setKodeProyekFilter,
    namaProyekFilter,
    setNamaProyekFilter,
    gudangFilter,
    setGudangFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
