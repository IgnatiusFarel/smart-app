"use client";
import { DataTable } from "@/components/table/data-table";
import { ActivityLog } from "@/constants/data";
import { columns } from "./columns";
import { DataTableSearch } from "@/components/table/data-table-search";
import { DataTableFilter } from "@/components/table/data-table-filter";
import { DataTableResetFilter } from "@/components/table/data-table-reset-filter";
import {
  ACTIVITY_OPTIONS,
  ROLE_OPTIONS,
  useActivityLogTableFilters,
} from "./table-filters";
import { CircleUserRound, Settings2} from "lucide-react";

export default function ActivityLogTable({
  data,
  totalData,
}: {
  data: ActivityLog[];
  totalData: number;
}) {
  const {
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    activityFilter,
    setActivityFilter,
    roleFilter,
    setRoleFilter,
  } = useActivityLogTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Activity Log"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        <DataTableFilter
          filterKey="activity"
          icon={Settings2}
          title="Activity"
          options={ACTIVITY_OPTIONS}
          setFilterValue={setActivityFilter}
          filterValue={activityFilter}
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
