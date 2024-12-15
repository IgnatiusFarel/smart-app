'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { BankData } from '@/constants/data';

export const columns: ColumnDef<BankData>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'namaFungsi',
    header: 'Nama Fungsi',
    cell: ({ row }) => row.original.namaFungsi,
  },
  {
    accessorKey: 'createdBy',
    header: 'Created by',
    cell: ({ row }) => row.original.approvalStatus,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    cell: ({ row }) => row.original.approvalStatus,
  },  
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
