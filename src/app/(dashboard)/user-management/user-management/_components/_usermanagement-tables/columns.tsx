'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { UserManagement } from '@/constants/data';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<UserManagement>[] = [
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
    accessorKey: 'nama',
    header: 'Nama',
    cell: ({ row }) => row.original.nama,
    
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => row.original.email,
  },
  {
    accessorKey: 'jabatan',
    header: 'Jabatan',
    cell: ({ row }) => row.original.jabatan,
  },
  {
    accessorKey: 'detailUser',
    header: 'Detail User',
    cell: ({ row }) => row.original.detailUser,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => row.original.role,
  },
  {
    accessorKey: 'statusAkun',
    header: 'Status Akun',
    cell: ({ row }) => {
      const status = row.original.statusAkun;

      let badgeColor = ""; 
      if (status === "Inactive") {
        badgeColor = "bg-[#d3455b]";
      } else if (status === "Active") {
        badgeColor = "bg-[#1aae9f]";
      } 
      return <Badge className={badgeColor}>{status}</Badge>;
    },
  },
  
  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
