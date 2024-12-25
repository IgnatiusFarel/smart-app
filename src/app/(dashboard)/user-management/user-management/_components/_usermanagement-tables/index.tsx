"use client";
import { DataTable } from "@/components/table/data-table";
import { UserManagement } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  JABATAN_OPTIONS,
  ROLE_OPTIONS,
  useUserManagementTableFilters,
} from "./table-filters";
import { CircleUserRound, SquareUserRound } from "lucide-react";

export default function UserManagementTable({
  data,
  totalData,
}: {
  data: UserManagement[];
  totalData: number;
}) {
  const {
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    jabatanFilter,
    setJabatanFilter,
    roleFilter,
    setRoleFilter,
  } = useUserManagementTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="User"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilter
          filterKey="jabatan"
          icon={SquareUserRound}
          title="Jabatan"
          options={JABATAN_OPTIONS}
          setFilterValue={setJabatanFilter}
          filterValue={jabatanFilter}
        />
        <DataTableFilter
          filterKey="role"
          icon={CircleUserRound}
          title="Role"
          options={ROLE_OPTIONS}
          setFilterValue={setRoleFilter}
          filterValue={roleFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable columns={columns} data={searchData} totalItems={totalData} />
    </div>
  );
}
