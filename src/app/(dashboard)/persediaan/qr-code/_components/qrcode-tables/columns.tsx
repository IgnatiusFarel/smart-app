'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { QRCode } from '@/constants/data';

export const columns: ColumnDef<QRCode>[] = [
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
    header: '.',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'kodeBarangMaterial',
    header: 'Kode Barang Material',
    cell: ({ row }) => row.original.kodeBarangMaterial,
  },
  {
    accessorKey: 'namaBarangMaterial',
    header: 'Nama Barang/Material',
    cell: ({ row }) => row.original.namaBarangMaterial,
  },
  {
    accessorKey: 'kodeNamaProyek',
    header: 'Kode dan Nama Proyek',
    cell: ({ row }) => row.original.kodeNamaProyek,
  },
  {
    accessorKey: 'uom',
    header: 'UOM',
    cell: ({ row }) => row.original.uom,
  },
  {
    accessorKey: 'createdBy',
    header: 'Created by',
    cell: ({ row }) => row.original.createdBy,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    cell: ({ row }) => row.original.createdAt,
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
