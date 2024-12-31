'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { Adjustment } from '@/constants/data';
import { CellAction } from './cell-action';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<Adjustment>[] = [
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
    accessorKey: 'tanggalAdjustment',
    header: 'Tanggal Adjustment',
    cell: ({ row }) => row.original.tanggalAdjustment,
  },
  {
    accessorKey: 'saldoAwal',
    header: 'Nomor dan Tanggal Doc Adjustment',
    cell: ({ row }) => row.original.nomorTanggalDocAdjustment,
  },
  {
    accessorKey: 'approvalStatus',
    header: 'Approval Status',
    cell: ({ row }) => {
      const status = row.original.approvalStatus;

      let badgeColor = ""; 
      if (status === "Rejected") {
        badgeColor = "bg-[#d3455b]";
      } else if (status === "Approved") {
        badgeColor = "bg-[#1aae9f]";
      } else if (status === "Waiting") {
        badgeColor = "bg-[#788896]";
      }

      return <Badge className={badgeColor}>{status}</Badge>;
    },
  },
  {
    accessorKey: 'kodeBarangMaterial',
    header: 'Kode Barang/Material',
    cell: ({ row }) => row.original.kodeBarangMaterial,
  },
  {
    accessorKey: 'namaBarangMaterial',
    header: 'Nama Barang/Material',
    cell: ({ row }) => row.original.namaBarangMaterial,
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
    accessorKey: 'hargaSatuan',
    header: 'Harga Satuan',
    cell: ({ row }) => row.original.hargaSatuan,
  }, 
  {
    accessorKey: 'totalHarga',
    header: 'Total Harga',
    cell: ({ row }) => row.original.totalHarga,
  }, 
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
