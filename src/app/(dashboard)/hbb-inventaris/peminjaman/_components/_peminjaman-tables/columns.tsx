"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Peminjaman } from "@/constants/data";

export const columns: ColumnDef<Peminjaman>[] = [
  {
    accessorKey: "no",
    header: "No",
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: "tanggalPeminjaman",
    header: "Tanggal Peminjaman",
    cell: ({ row }) => row.original.tanggalPeminjaman,
  },
  {
    accessorKey: "nomorDanTanggal",
    header: "Nomor dan Tanggal",
    cell: ({ row }) => row.original.nomorDanTanggal,
  },
  {
    accessorKey: "approvalStatus",
    header: "Approval Status",
    cell: ({ row }) => row.original.approvalStatus,
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
    accessorKey: "jumlah",
    header: "Jumlah",
    cell: ({ row }) => row.original.jumlah,
  },
  {
    accessorKey: "hargaSatuan",
    header: "Harga Satuan",
    cell: ({ row }) =>
      row.original.hargaSatuan.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      }),
  },
  {
    accessorKey: "totalHarga",
    header: "Total Harga",
    cell: ({ row }) =>
      row.original.totalHarga.toLocaleString("id-ID", {
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
