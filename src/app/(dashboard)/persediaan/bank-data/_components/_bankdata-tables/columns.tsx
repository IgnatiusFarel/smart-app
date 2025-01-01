'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { PersediaanBankDataFungsi, PersediaanBankDataGudang, PersediaanBankDataKategoriBarangMaterial, PersediaanBankDataKelompokBarangMaterial, PersediaanBankDataKodeAkun, PersediaanBankDataKodedanNamaProyek, PersediaanBankDataKondisi, PersediaanBankDataNamadanKodeBarangMaterial, PersediaanBankDataNamaEksProyek, PersediaanBankDataUOM,  } from '@/constants/data';

export const columnsFungsi: ColumnDef<PersediaanBankDataFungsi>[] = [
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

export const columnsKelompokBarangMaterial: ColumnDef<PersediaanBankDataKelompokBarangMaterial>[] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'fungsi',
    header: 'Fungsi',
    cell: ({ row }) => row.original.fungsi,
  },
  {
    accessorKey: 'kelompokBarangMaterial',
    header: 'Kelompok Barang/Material',
    cell: ({ row }) => row.original.kelompokBarangMaterial,
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

export const columnsKodedanNamaProyek: ColumnDef<PersediaanBankDataKodedanNamaProyek>[] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'fungsi', 
    header: 'Fungsi',
    cell: ({ row }) => row.original.fungsi,
  },
  {
    accessorKey: 'kelompokBarangMaterial',
    header: 'Kelompok Barang/Material',
    cell: ({ row }) => row.original.kelompokBarangMaterial,
  },
  {
    accessorKey: 'kodedanNamaProyek',
    header: 'Kode dan Nama Proyek',
    cell: ({ row }) => row.original.kodedanNamaProyek,
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

export const columnsUOM: ColumnDef<PersediaanBankDataUOM>[] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'fungsi',
    header: 'Fungsi',
    cell: ({ row }) => row.original.fungsi,
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

export const columnsKategoriBarangMaterial: ColumnDef<PersediaanBankDataKategoriBarangMaterial>[] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'kategori',
    header: 'Kategori',
    cell: ({ row }) => row.original.kategori,
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

export const columnsNamaEksProyek: ColumnDef<PersediaanBankDataNamaEksProyek>[] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'namaEksProyek',
    header: 'Nama Eks Proyek',
    cell: ({ row }) => row.original.namaEksPoryek,
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

export const columnsNamadanKodeBarangMaterial: ColumnDef<PersediaanBankDataNamadanKodeBarangMaterial> [] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'kode',
    header: 'Kode',
    cell: ({ row }) => row.original.kode,
  },
  {
    accessorKey: 'namaBarangMaterial',
    header: 'Nama Barang/Material',
    cell: ({ row }) => row.original.namaBarangMaterial,
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

export const columnsKondisi: ColumnDef<PersediaanBankDataKondisi> [] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'kondisi',
    header: 'Kondisi',
    cell: ({ row }) => row.original.kondisi,
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

export const columnsGudang: ColumnDef<PersediaanBankDataGudang> [] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'lokasiGudang',
    header: 'Lokasi Gudang',
    cell: ({ row }) => row.original.lokasiGudang,
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

export const columnsKodeAkun: ColumnDef<PersediaanBankDataKodeAkun> [] = [
  {
    accessorKey: 'no',
    header: 'No',
    cell: ({ row }) => row.original.no,
  },
  {
    accessorKey: 'kode',
    header: 'Kode',
    cell: ({ row }) => row.original.kode,
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
    cell: ({ row }) => row.original.nama,
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
