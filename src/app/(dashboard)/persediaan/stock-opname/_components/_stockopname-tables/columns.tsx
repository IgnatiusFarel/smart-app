'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { StockOpname } from '@/constants/data';

export const columns: ColumnDef<StockOpname>[] = [
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
    accessorKey: 'tanggalStockOpname',
    header: 'Tanggal Stock Opname',
    cell: ({ row }) => row.original.tanggalStockOpname,
  },
  {
    accessorKey: 'approvalStatus',
    header: 'Approval Status',
    cell: ({ row }) => row.original.approvalStatus,
  },
  {
    accessorKey: 'namaBarang',
    header: 'Nama Barang/Material',
    cell: ({ row }) => row.original.namaBarangMaterial,
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
    accessorKey: 'kelompok',
    header: 'Kelompok',
    cell: ({ row }) => row.original.kelompok,    
  },
  {
    accessorKey: 'uom',
    header: 'UOM',
    cell: ({ row }) => row.original.uom,
  },
  {
    accessorKey: 'stockonHand',
    header: 'Stock on Hand',
    cell: ({ row }) => row.original.stockHand,
  },
  {
    accessorKey: 'hasilPerhitunganFisik',
    header: 'Hasil Perhitungan Fisik',
    cell: ({ row }) => row.original.hasilPerhitunganFisik,
  },
  {
    accessorKey: 'selisih',
    header: 'Selisih',
    cell: ({ row }) => row.original.selisih,
  },
  {
    accessorKey: 'penjualan',
    header: 'Penjualan',
    cell: ({ row }) => row.original.penjualan,
  },
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
