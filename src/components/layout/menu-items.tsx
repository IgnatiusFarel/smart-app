import { ChartBarIncreasing, Folder, User } from "lucide-react";

export const menuItems = [
  {
    title: "Persediaan",
    icon: <Folder className="w-5 h-5 mr-2" />,
    items: [
      { title: "Dashboard", url: "/persediaan/overview" },
      { title: "Penerimaan", url: "/persediaan/penerimaan" },
      { title: "Pengeluaran", url: "/persediaan/pengeluaran" },
      { title: "Pengembalian", url: "/persediaan/pengembalian" },
      { title: "Stock Opname", url: "/persediaan/stock-opname" },
      { title: "Penghapusan", url: "/persediaan/penghapusan" },
      { title: "Adjustment", url: "/persediaan/adjustment" },
      { title: "Laporan", url: "/persediaan/laporan" },
      { title: "Bank Data", url: "/persediaan/bank-data" },
      { title: "QR Code", url: "/persediaan/qr-code" },
    ],
  },
  {
    title: "HBB dan Inventaris",
    icon: <ChartBarIncreasing className="w-h h-5 mr-2" />,
    items: [
      { title: "Dashboard", url: "/hbb-inventaris/overview"},
      { title: "Penerimaan", url: "/hbb-inventaris/penerimaan"},
      { title: "Peminjaman", url: "/hbb-inventaris/peminjaman"},
      { title: "Pengembalian", url: "/hbb-inventaris/pengembalian"},
      { title: "Inventaris", url: "/hbb-inventaris/inventaris"},
      { title: "Penghapusan", url: "/hbb-inventaris/penghapusan"},
      { title: "Laporan", url: "/hbb-inventaris/laporan"},
      { title: "Bank Data", url: "/hbb-inventaris/bank-data"},
      { title: "QR Code", url: "/hbb-inventaris/qr-code"},
    ]
  },
  {
    title: "User Management",
    icon: <User className="w-h h-5 mr-2" />,
    items: [
      { title: "User Management", url: "/hbb-inventaris/overview"},
      { title: "Role Management", url: "/hbb-inventaris/penerimaan"},
    ]
  }
];
