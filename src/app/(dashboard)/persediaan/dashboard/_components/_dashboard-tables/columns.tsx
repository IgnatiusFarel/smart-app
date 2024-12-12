'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { TabelMutasi } from '@/constants/data';

export const columns: ColumnDef<TabelMutasi>[] = [
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
    accessorKey: 'periode',
    header: 'Periode',
    cell: ({ row }) => row.original.periode,
  },
  {
    accessorKey: 'saldoAwal',
    header: 'Saldo Awal',
    cell: ({ row }) => row.original.saldoAwal,
  },
  {
    accessorKey: 'transaksiIn',
    header: 'Transaksi In',
    cell: ({ row }) => row.original.transaksiIn,
  },
  {
    accessorKey: 'transaksiOut',
    header: 'Transaksi Out',
    cell: ({ row }) => row.original.transaksiOut,
  },
  {
    accessorKey: 'saldoAkhir',
    header: 'Saldo Akhir',
    cell: ({ row }) => row.original.saldoAkhir,
  },
  {
    accessorKey: 'Nilai Persediaan',
    header: 'Nilai Persediaan',
    cell: ({ row }) => row.original.nilaiPersediaan,
  },
  {
    accessorKey: 'presentase',
    header: 'Presentase',
    cell: ({ row }) => row.original.persentase,
  }, 
];
