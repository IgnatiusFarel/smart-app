"use client";
import { useCallback, useMemo } from "react";
import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const ACTIVITY_OPTIONS = [
  { value: 'create', label: 'Create' },
  { value: 'update', label: 'Update' },
  { value: 'delete', label: 'Delete' },
  { value: 'approval', label: 'Approval' },
  { value: 'verified', label: 'Verified' },
  { value: 'rejection', label: 'Rejection' }
];

export const ROLE_OPTIONS = [
    { value: 'superadmin', label: 'Superadmin' },
    { value: 'admin', label: 'Admin' }
  ];

  
export function useActivityLogTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    'search',
    searchParams.q.withOptions({ shallow: false }).withDefault('')
  );

  const [activityFilter, setActivityFilter] = useQueryState(
    'activity',
    searchParams.activity.withOptions({ shallow: false }).withDefault('')
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
      !!activityFilter || 
      !!roleFilter 
    );
  }, [searchQuery,  activityFilter, roleFilter]);
  
  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setActivityFilter(null);
    setRoleFilter(null);    
    setPage(1);
  }, [setSearchQuery, setActivityFilter, setRoleFilter, setPage]);
  

  return {
    searchQuery,
    setSearchQuery,
    activityFilter,
    setActivityFilter,
    roleFilter,
    setRoleFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive
  };
}
