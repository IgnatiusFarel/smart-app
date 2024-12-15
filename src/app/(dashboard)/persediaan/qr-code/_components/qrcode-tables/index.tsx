'use client';

import { DataTable } from '@/components/table/data-table';
import { QRCode } from '@/constants/data';
import { columns } from './columns';
// import { SearchInput } from '@/components/table/data-table-search';
import { useState } from 'react';

export default function QRCodeTable({
  data,
  totalData,
}: {
  data: QRCode[];
  totalData: number;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data berdasarkan searchQuery
  const filteredData = data.filter((item) =>
    item.kodeNamaProyek.toLowerCase().includes(searchQuery.toLowerCase())
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
