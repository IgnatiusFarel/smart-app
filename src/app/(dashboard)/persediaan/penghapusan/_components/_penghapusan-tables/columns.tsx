'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Penghapusan } from '@/constants/data';

export const columns: ColumnDef<Penghapusan>[] = [
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
    accessorKey: 'nomorTanggalDocPenghapusan',
    header: 'Nomor dan Tanggal Doc Penghapusan',
    cell: ({ row }) => row.original.tanggalPenerimaan,
  },
  {
    accessorKey: 'approvalStatus',
    header: 'Approval Status',
    cell: ({ row }) => row.original.approvalStatus,
  },
  {
    accessorKey: 'kodeBarang',
    header: 'Kode Barang/Material',
    cell: ({ row }) => row.original.kodeBarang,
  },
  {
    accessorKey: 'namaBarang',
    header: 'Nama Barang/Material',
    cell: ({ row }) => row.original.kodeBarang,
  },
  {
    accessorKey: 'uom',
    header: 'UOM',
    cell: ({ row }) => row.original.uom,
  },
  {
    accessorKey: 'jumlah',
    header: 'Jumlah',
    cell: ({ row }) => row.original.jumlah,
  },
  {
    accessorKey: 'kodeProyek',
    header: 'Kode Proyek',
    cell: ({ row }) => row.original.kodeProyek,
  },
  {
    accessorKey: 'namaProyek',
    header: 'Nama Proyek',
    cell: ({ row }) => row.original.namaProyek,
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];