'use client';

import { DataTable } from '@/components/table/data-table';
import { BankData } from '@/constants/data';
import { columns } from './columns';
// import { SearchInput } from '@/components/table/data-table-search';
import { useState } from 'react';

export default function BankDataTable({
  data,
  totalData,
}: {
  data: BankData[];
  totalData: number;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data berdasarkan searchQuery
  const filteredData = data.filter((item) =>
    item.namaProyek.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Search Input */}
      {/* <SearchInput onChange={(value) => setSearchQuery(value)} /> */}

      {/* Table */}
      <div className="overflow-x-auto">
        <DataTable columns={columns} data={filteredData} totalItems={totalData} />
      </div>
    </div>
  );
}
