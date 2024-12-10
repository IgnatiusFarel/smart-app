'use client'
import { useCallback, useMemo } from 'react';
import { useQueryState } from 'nuqs';
import { searchParams } from '@/lib/searchparams';

export const KODEPROYEK_OPTIONS = [
    { value: 'aznfkk', label: 'Azn-Fkk-01'},
    { value: 'baxzky', label: 'Bax-zky-02'}
]; 

export const KELOMPOK_OPTIONS = [
    { value: 'kelompokbrok', label: 'Kelompok Brook'},
    { value: 'kelompokbree', label: 'Kelompok Breek'}
];

export const GUDANG_OPTIONS = [
    { value: 'gudangyogyakarta', label: 'Gudang Yogyakarta'},
    { value: 'gudangjakarta', label: 'Gudang Jakarta'}
];

export const NAMAPROYEK_OPTIONS = [
    { value: 'proyekabc', label: 'Proyek ABC'},
    { value: 'proyekxyz', label: 'Proyek XYZ'}
]

export default function usePengeluaranTableFilters() {
    const [searchQuery, setSearchQuery] = useQueryState(
        'search',
        searchParams.q.withOptions({ shallow: false, throttleMs: 1000})
        .withDefault("")
    );

    const [kodeProyekFilter, setKodeProyekFilter] = useQueryState(
        'kode-proyek',
        searchParams.kodeProyek.withOptions({ shallow: false}).withDefault('') 
    );

    const [kelompokFilter, setKelompokFilter] = useQueryState(
        'kelompok',
        searchParams.kelompok.withOptions({ shallow: false }).withDefault('')
    );

    const [gudangFilter, setGudangFilter] = useQueryState(
        'gudang',
        searchParams.gudang.withOptions({ shallow: false }).withDefault('')
    );

    const [namaProyekFilter, setNamaProyekFilter] = useQueryState(
        'nama-proyek',
        searchParams.namaProyek.withOptions({ shallow: false}).withDefault('')
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
        return !!searchQuery || !!kodeProyekFilter || !!kelompokFilter || !!gudangFilter || !!namaProyekFilter;
    }, [searchQuery, kodeProyekFilter, kelompokFilter, gudangFilter, namaProyekFilter]);

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