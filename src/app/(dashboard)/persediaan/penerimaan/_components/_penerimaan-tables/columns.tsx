"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Penerimaan } from "@/constants/data";

export const columns: ColumnDef<Penerimaan>[] = [
  {
    accessorKey: "no",
    header: "No",
    enableSorting: false,
    cell: ({ row }) => <div>{row.getValue("no")}</div>,
  },
  {
    accessorKey: "tanggalPenerimaan",
    header: "Tanggal Penerimaan",
    cell: ({ row }) => row.original.tanggalPenerimaan,
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
    accessorKey: "kodeProyek",
    header: "Kode Proyek",
    cell: ({ row }) => row.original.kodeProyek,
  },
  {
    accessorKey: "namaProyek",
    header: "Nama Proyek",
    cell: ({ row }) => row.original.namaProyek,
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
