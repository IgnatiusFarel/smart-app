"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Inventaris } from "@/constants/data";

export const columns: ColumnDef<Inventaris>[] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: "tanggalInventaris",
    header: "Tanggal Inventaris",
    cell: ({ row }) => row.original.tanggalInventaris,
  },
  {
    accessorKey: "approvalStatus",
    header: "Approval Status",
    cell: ({ row }) => row.original.approvalStatus,
  },
  {
    accessorKey: "jenis",
    header: "Jenis",
    cell: ({ row }) => row.original.jenis,
  },
  {
    accessorKey: "klasifikasi",
    header: "Klasifikasi",
    cell: ({ row }) => row.original.klasifikasi,
  },
  {
    accessorKey: "kodeBarang",
    header: "Kode Barang",
    cell: ({ row }) => row.original.kodeBarang,
  },
  {
    accessorKey: "namaBarang",
    header: "Nama Barang",
    cell: ({ row }) => row.original.namaBarang,
  },
  {
    accessorKey: "uom",
    header: "UOM",
    cell: ({ row }) => row.original.uom,
  },
  {
    accessorKey: 'jumlahAsset',
    header: 'Jumlah Asset',
    cell: ({ row }) => row.original.jumlahAsset,
  },
  {
    accessorKey: 'stockOnHand',
    header: 'Stock On Hand',
    cell: ({ row }) => row.original.stockOnHand,
  },
  {
    accessorKey: 'hasilPerhitunganFisik',
    header: 'Hasil Perhitungan Fisik',
    cell: ({ row }) => row.original.hasilPerhitunganFisik,
  },
  {
    accessorKey: "selisih",
    header: "Selisih",
    cell: ({ row }) =>
      row.original.selisih
  },
  {
    accessorKey: "kondisi",
    header: "Kondisi",
    cell: ({ row }) =>
      row.original.kondisi
  },

  {
    accessorKey: "penjelasan",
    header: "Penjelasan",
    cell: ({ row }) =>
      row.original.penjelasan.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      }),
    meta: {
      className: "w-[10px]", 
    },
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
