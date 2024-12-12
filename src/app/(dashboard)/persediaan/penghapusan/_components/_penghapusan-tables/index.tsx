'use client';
import { DataTable } from '@/components/table/data-table';
import { Penghapusan } from '@/constants/data';
import { columns } from './columns';
import { DataTableResetFilter } from '@/components/table/data-table-reset-filter';
import { DataTableFilter } from '@/components/table/data-table-filter';
import { DataTableSearch } from '@/components/table/data-table-search';
import { Upload, Warehouse } from 'lucide-react';
import { GUDANG_OPTIONS, usePenghapusanTableFilters } from './table-filters';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PenghapusanTable({
  data,
  totalData,
}: {
  data: Penghapusan[];
  totalData: number;
}) {
  const { 
    setPage,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setSearchQuery,
    gudangFilter,
    setGudangFilter,
  } = usePenghapusanTableFilters();

  const searchData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="Penghapusan"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />        
        <DataTableFilter
          filterKey="gudang"
          icon={Warehouse} 
          title="Gudang"
          options={GUDANG_OPTIONS}
          setFilterValue={setGudangFilter}
          filterValue={gudangFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      <div className="ml-auto">
          <Button
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Upload className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
  

      </div>
        <DataTable columns={columns} data={searchData} totalItems={totalData} />
        {/* <div className="overflow-x-auto"> */}
        {/* </div> */}
    </div>
  );
}
