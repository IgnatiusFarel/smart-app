"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const JABATAN_OPTIONS = [
  { value: 'jabatanGede', label: 'Jabatan Gede' },
  { value: 'jabatanKecil', label: 'Jabatan Kecil' }
];

export const ROLE_OPTIONS = [
    { value: 'superadmin', label: 'Superadmin' },
    { value: 'admin', label: 'Admin' }
  ];

  
export function useUserManagementTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [jabatanFilter, setJabatanFilter] = useQueryState(
    'jabatan',
    searchParams.jabatan.withOptions({ shallow: false }).withDefault('')
  );

  const [roleFilter, setRoleFilter] = useQueryState(
    'kelompok',
    searchParams.role.withOptions({ shallow: false }).withDefault('')
  );

  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );

  const isAnyFilterActive = useMemo(() => {
    return (
      !!searchQuery || 
      !!jabatanFilter || 
      !!roleFilter 
    );
  }, [searchQuery,  jabatanFilter, roleFilter]);
  
  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setJabatanFilter(null);
    setRoleFilter(null);    
    setPage(1);
  }, [setSearchQuery, setJabatanFilter, setRoleFilter, setPage]);
  

  return {
    searchQuery,
    setSearchQuery,
    jabatanFilter,
    setJabatanFilter,
    roleFilter,
    setRoleFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
