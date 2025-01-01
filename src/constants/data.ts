export interface TabelMutasi {
  periode: string;
  saldoAwal: number;
  transaksiIn: string;
  transaksiOut: string;
  saldoAkhir: number;
  nilaiPersediaan: number;
  persentase: string;
}

export const dummyTabelMutasi: TabelMutasi[] = [
  {
    periode: '2022-12-25',
    saldoAwal: 10000,
    transaksiIn: '2022-10-10',
    transaksiOut: '2022-11-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 30,
    persentase: '10%',

  },
  {
    periode: '2023-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2024-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2024-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2024-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2022-12-25',
    saldoAwal: 10000,
    transaksiIn: '2022-10-10',
    transaksiOut: '2022-11-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 30,
    persentase: '10%',

  },
  {
    periode: '2023-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2024-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2024-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  },
  {
    periode: '2024-11-24',
    saldoAwal: 10000,
    transaksiIn: '2024-12-12',
    transaksiOut: '2024-12-20',
    saldoAkhir: 200000,
    nilaiPersediaan: 20,
    persentase: '50%',

  }
];
export interface PersediaanPenerimaan {
  no: number;
  tanggalPenerimaan: string;
  nomorDanTanggal: string;
  approvalStatus: string;
  kodeBarang: string;
  uom: string;
  jumlah: number;
  kodeProyek: string;
  namaProyek: string;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyPersediaanPenerimaan: PersediaanPenerimaan[] = [
  {
    no: 1,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 7,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 9,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 10,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 11,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
];
export interface HBBInventarisPenerimaan {
  no: number;
  tanggalPenerimaan: string;
  nomorDanTanggal: string;
  approvalStatus: string;
  kodeBarang: string;
  namaBarang: string;
  uom: string;
  jumlah: number;
  kodeProyek: string;
  namaProyek: string;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyHBBInventarisPenerimaan: HBBInventarisPenerimaan[] = [
  {
    no: 1,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Barang 1',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Barang 1',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Barang 1',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 7,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Barang 1',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Barang 1',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 9,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Barang 1',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 10,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 11,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
];

export interface Pengeluaran {
  no: number;
  tanggalPenerimaan: string;
  nomorDanTanggal: string;
  approvalStatus: string;
  kodeBarang: string;
  uom: string;
  jumlah: number;
  kodeProyek: string;
  namaProyek: string;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyPengeluaran: Pengeluaran[] = [
  {
    no: 1,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 7,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 9,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 10,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  }
];

export interface PersediaanPengembalian {
  no: number;
  tanggalPenerimaan: string;
  nomorTanggalPenerimaan: string;
  nomorTanggalPengembalian: string;
  approvalStatus: string;
  kodeBarang: string;
  uom: string;
  jumlah: number;
  kodeProyek: string;
  namaProyek: string;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyPersediaanPengembalian: PersediaanPengembalian[] = [
  {
    no: 1,
    tanggalPenerimaan: '2024-11-20',
    nomorTanggalPenerimaan: 'INV-001 / 2024-11-20',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPenerimaan: '2024-11-21',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPenerimaan: '2024-11-22',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPenerimaan: '2024-11-23',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPenerimaan: '2024-11-24',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalPenerimaan: '2024-11-20',
    nomorTanggalPenerimaan: 'INV-001 / 2024-11-20',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,

  },
  {
    no: 7,
    tanggalPenerimaan: '2024-11-21',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalPenerimaan: '2024-11-22',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 9,
    tanggalPenerimaan: '2024-11-23',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 10,
    tanggalPenerimaan: '2024-11-24',
    nomorTanggalPenerimaan: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  }
];
export interface HBBInventarisPengembalian {
  no: number;
  tanggalPeminjaman: string;
  nomorTanggalPeminjaman: string;
  nomorTanggalPengembalian: string;
  approvalStatus: string;
  kodeBarang: string;
  namaBarang: string;
  uom: string;
  jumlah: number;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyHBBInventarisPengembalian: HBBInventarisPengembalian[] = [
 {
    no: 1,
    tanggalPeminjaman: '2024-11-20',
    nomorTanggalPeminjaman: 'INV-001 / 2024-11-20',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 10,
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPeminjaman: '2024-11-21',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Barang 1',
    uom: 'BOX',
    jumlah: 5,
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPeminjaman: '2024-11-22',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Barang 1',
    uom: 'KG',
    jumlah: 25,
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPeminjaman: '2024-11-23',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Barang 1',
    uom: 'LITER',
    jumlah: 50,
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPeminjaman: '2024-11-24',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalPeminjaman: '2024-11-20',
    nomorTanggalPeminjaman: 'INV-001 / 2024-11-20',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 10,
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 7,
    tanggalPeminjaman: '2024-11-21',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Barang 1',
    uom: 'BOX',
    jumlah: 5,
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalPeminjaman: '2024-11-22',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Barang 1',
    uom: 'KG',
    jumlah: 25,
    hargaSatuan: 30000,
    totalHarga: 750000,
 },
  {
    no: 9,
    tanggalPeminjaman: '2024-11-23',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Barang 1',
    uom: 'LITER',
    jumlah: 50,
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 10,
    tanggalPeminjaman: '2024-11-24',
    nomorTanggalPeminjaman: 'INV-002 / 2024-11-21',
    nomorTanggalPengembalian: 'INV-001 / 2024-11-22',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
];

export interface StockOpname {
  no: number;
  tanggalStockOpname: string;
  approvalStatus: string;
  namaBarangMaterial: string;
  kodeProyek: string;
  namaProyek: string;
  kelompok: string;
  uom: string;
  stockHand: number;
  hasilPerhitunganFisik: number;
  selisih: number;
  penjualan: number;
}

export const dummyStockOpname: StockOpname[] = [
  {
    no: 1,
    tanggalStockOpname: '2024-11-20',
    approvalStatus: 'Approved',
    namaBarangMaterial: 'BRG-001',
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    kelompok: 'Kelompok A',
    uom: 'PCS',
    stockHand: 10,
    hasilPerhitunganFisik: 50000,
    selisih: 10,
    penjualan: 500000,
  },
  {
    no: 2,
    tanggalStockOpname: '2024-11-21',
    approvalStatus: 'Waiting',
    namaBarangMaterial: 'BRG-002',
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    kelompok: 'Kelompok B',
    uom: 'BOX',
    stockHand: 5,
    hasilPerhitunganFisik: 200000,
    selisih: 5,
    penjualan: 1000000,
  },
  {
    no: 3,
    tanggalStockOpname: '2024-11-22',
    approvalStatus: 'Rejected',
    namaBarangMaterial: 'BRG-003',
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    kelompok: 'Kelompok C',
    uom: 'KG',
    stockHand: 25,
    hasilPerhitunganFisik: 30000,
    selisih: 25,
    penjualan: 750000,
  },
  {
    no: 4,
    tanggalStockOpname: '2024-11-23',
    approvalStatus: 'Approved',
    namaBarangMaterial: 'BRG-004',
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    kelompok: 'Kelompok D',
    uom: 'LITER',
    stockHand: 50,
    hasilPerhitunganFisik: 10000,
    selisih: 50,
    penjualan: 500000,
  },
  {
    no: 5,
    tanggalStockOpname: '2024-11-24',
    approvalStatus: 'Waiting',
    namaBarangMaterial: 'BRG-005',
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    kelompok: 'Kelompok E',
    uom: 'PCS',
    stockHand: 15,
    hasilPerhitunganFisik: 75000,
    selisih: 15,
    penjualan: 1125000,
  },
  {
    no: 6,
    tanggalStockOpname: '2024-11-20',
    approvalStatus: 'Approved',
    namaBarangMaterial: 'BRG-001',
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    kelompok: 'Kelompok A',
    uom: 'PCS',
    stockHand: 10,
    hasilPerhitunganFisik: 50000,
    selisih: 10,
    penjualan: 500000,

  },
  {
    no: 7,
    tanggalStockOpname: '2024-11-21',
    approvalStatus: 'Waiting',
    namaBarangMaterial: 'BRG-002',
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    kelompok: 'Kelompok B',
    uom: 'BOX',
    stockHand: 5,
    hasilPerhitunganFisik: 200000,
    selisih: 5,
    penjualan: 1000000,
  },
  {
    no: 8,
    tanggalStockOpname: '2024-11-22',
    approvalStatus: 'Rejected',
    namaBarangMaterial: 'BRG-003',
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    kelompok: 'Kelompok C',
    uom: 'KG',
    stockHand: 25,
    hasilPerhitunganFisik: 30000,
    selisih: 25,
    penjualan: 750000,
  },
  {
    no: 9,
    tanggalStockOpname: '2024-11-23',
    approvalStatus: 'Approved',
    namaBarangMaterial: 'BRG-004',
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    kelompok: 'Kelompok D',
    uom: 'LITER',
    stockHand: 50,
    hasilPerhitunganFisik: 10000,
    selisih: 50,
    penjualan: 500000,
  },
  {
    no: 10,
    tanggalStockOpname: '2024-11-24',
    approvalStatus: 'Waiting',
    namaBarangMaterial: 'BRG-005',
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    kelompok: 'Kelompok E',
    uom: 'PCS',
    stockHand: 15,
    hasilPerhitunganFisik: 75000,
    selisih: 15,
    penjualan: 1125000,
  }

];

export interface PersediaanPenghapusan {
  no: number;
  tanggalPenerimaan: string;
  nomorDanTanggal: string;
  approvalStatus: string;
  kodeBarang: string;
  uom: string;
  jumlah: number;
  kodeProyek: string;
  namaProyek: string;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyPersediaanPenghapusan: PersediaanPenghapusan[] = [
  {
    no: 1,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalPenerimaan: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeProyek: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 7,
    tanggalPenerimaan: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeProyek: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalPenerimaan: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeProyek: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 9,
    tanggalPenerimaan: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeProyek: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 10,
    tanggalPenerimaan: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeProyek: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  }
];
export interface HBBInventarisPenghapusan {
  no: number;
  nomorDanTanggalPenghapusan: string;
  approvalStatus: string;
  kodeBarang: string;
  namaBarang: string;
  uom: string;
  jumlah: number;
}

export const dummyHBBInventarisPenghapusan: HBBInventarisPenghapusan[] = [
  {
    no: 1,
    nomorDanTanggalPenghapusan: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 10,
  },
  {
    no: 2,
    nomorDanTanggalPenghapusan: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Barang 1',
    uom: 'BOX',
    jumlah: 5,
  },
  {
    no: 3,
    nomorDanTanggalPenghapusan: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Barang 1',
    uom: 'KG',
    jumlah: 25,
  },
  {
    no: 4,
    nomorDanTanggalPenghapusan: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Barang 1',
    uom: 'LITER',
    jumlah: 50,
  },
  {
    no: 5,
    nomorDanTanggalPenghapusan: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
  },
  {
    no: 6,
    nomorDanTanggalPenghapusan: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 10,
  },
  {
    no: 7,
    nomorDanTanggalPenghapusan: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Barang 1',
    uom: 'BOX',
    jumlah: 5,
  },
  {
    no: 8,
    nomorDanTanggalPenghapusan: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Barang 1',
    uom: 'KG',
    jumlah: 25,
  },
  {
    no: 9,
    nomorDanTanggalPenghapusan: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Barang 1',
    uom: 'LITER',
    jumlah: 50,
  },
  {
    no: 10,
    nomorDanTanggalPenghapusan: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Barang 1',
    uom: 'PCS',
    jumlah: 15,
  }
];

export interface Adjustment {
  no: number;
  tanggalAdjustment: string;
  nomorTanggalDocAdjustment: string;
  approvalStatus: string;
  kodeBarang: string;
  uom: string;
  jumlah: number;
  kodeBarangMaterial: string;
  namaBarangMaterial: string;
  namaProyek: string;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyAdjustment: Adjustment[] = [
  {
    no: 1,
    tanggalAdjustment: '2024-11-20',
    nomorTanggalDocAdjustment: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeBarangMaterial: 'PRJ-001',
    namaBarangMaterial: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },                                        
  {
    no: 2,
    tanggalAdjustment: '2024-11-21',
    nomorTanggalDocAdjustment: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeBarangMaterial: 'PRJ-002',
    namaBarangMaterial: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalAdjustment: '2024-11-22',
    nomorTanggalDocAdjustment: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeBarangMaterial: 'PRJ-003',
    namaBarangMaterial: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalAdjustment: '2024-11-23',
    nomorTanggalDocAdjustment: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeBarangMaterial: 'PRJ-004',
    namaBarangMaterial: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalAdjustment: '2024-11-24',
    nomorTanggalDocAdjustment: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    uom: 'PCS',
    jumlah: 15,
    kodeBarangMaterial: 'PRJ-005',
    namaBarangMaterial: 'PRJ-005',
    namaProyek: 'Proyek E',
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
  {
    no: 6,
    tanggalAdjustment: '2024-11-20',
    nomorTanggalDocAdjustment: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    uom: 'PCS',
    jumlah: 10,
    kodeBarangMaterial: 'PRJ-001',
    namaBarangMaterial: 'PRJ-001',
    namaProyek: 'Proyek A',
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 7,
    tanggalAdjustment: '2024-11-21',
    nomorTanggalDocAdjustment: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    uom: 'BOX',
    jumlah: 5,
    kodeBarangMaterial: 'PRJ-002',
    namaBarangMaterial: 'PRJ-002',
    namaProyek: 'Proyek B',
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 8,
    tanggalAdjustment: '2024-11-22',
    nomorTanggalDocAdjustment: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    uom: 'KG',
    jumlah: 25,
    kodeBarangMaterial: 'PRJ-003',
    namaBarangMaterial: 'PRJ-003',
    namaProyek: 'Proyek C',
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 9,
    tanggalAdjustment: '2024-11-23',
    nomorTanggalDocAdjustment: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    uom: 'LITER',
    jumlah: 50,
    kodeBarangMaterial: 'PRJ-004',
    namaBarangMaterial: 'PRJ-004',
    namaProyek: 'Proyek D',
    hargaSatuan: 10000,
    totalHarga: 500000,
  }
];
export interface PersediaanBankDataFungsi {
  no: number;
  namaFungsi: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataFungsi: PersediaanBankDataFungsi[] = [
 {
  no: 1,
  namaFungsi: 'Proyek Operasi',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 2,
  namaFungsi: 'Proyek EPC',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 3,
  namaFungsi: 'Proyek JARGAS',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 4,
  namaFungsi: 'Energy Equipment',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
];

export interface PersediaanBankDataKelompokBarangMaterial {
  no: number;
  fungsi: string; 
  kelompokBarangMaterial: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataKelompokBarangMaterial : PersediaanBankDataKelompokBarangMaterial[] = [
  {
    no: 1,
    fungsi: 'Proyek Operasi',
    kelompokBarangMaterial: 'Keproyekan Operasi',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    fungsi: 'Proyek EPC',
    kelompokBarangMaterial: 'Keproyekan EPC',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    fungsi: 'Proyek JARGAS',
    kelompokBarangMaterial: 'Keproyekan JARGAS',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 4,
    fungsi: 'Energy Equipment',
    kelompokBarangMaterial: 'Energy Equipment',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 5,
    fungsi: 'Proyek Joglo',
    kelompokBarangMaterial: 'Material Eks - Proyek',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
]

export interface PersediaanBankDataKodedanNamaProyek {
  no: number;
  fungsi: string;
  kelompokBarangMaterial: string;
  kodedanNamaProyek: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataKodedanNamaProyek: PersediaanBankDataKodedanNamaProyek[] = [
  {
    no: 1,
    fungsi: 'Proyek Operasi',
    kelompokBarangMaterial: 'Keproyekan Operasi',
    kodedanNamaProyek: 'XXXXXX',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    fungsi: 'Proyek EPC',
    kelompokBarangMaterial: 'Keproyekan EPC',
    kodedanNamaProyek: 'XXXXXX',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    fungsi: 'Proyek JARGAS',
    kelompokBarangMaterial: 'Keproyekan JARGAS',
    kodedanNamaProyek: 'XXXXXX',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 4,
    fungsi: 'Energy Equipment',
    kelompokBarangMaterial: 'Energy Equipment',
    kodedanNamaProyek: 'XXXXXX',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 5,
    fungsi: 'Proyek Joglo',
    kelompokBarangMaterial: 'Material Eks - Proyek',
    kodedanNamaProyek: 'XXXXXX',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
]

export interface PersediaanBankDataUOM {
  no: number;
  fungsi: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataUOM: PersediaanBankDataUOM[] = [
 {
  no: 1,
  fungsi: 'Pcs',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 2,
  fungsi: 'Meter',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 3,
  fungsi: 'Liter',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 4,
  fungsi: 'Pack',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 5,
  fungsi: 'Unit',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 6,
  fungsi: 'Inch',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 7,
  fungsi: 'MM',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 },
 {
  no: 8,
  fungsi: 'Set',
  createdBy: 'Username',
  createdAt: 'HH:MM - DD/MM/YYYY',
 }
];

export interface PersediaanBankDataKategoriBarangMaterial {
  no: number;
  kategori: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataKategoriBarangMaterial: PersediaanBankDataKategoriBarangMaterial[] = [
  {
    no: 1,
    kategori: 'Tubular Good',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    kategori: 'Cock and Valve',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 3,
    kategori: 'Fitting and Flange',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 4,
    kategori: 'Instrument',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 5,
    kategori: 'Bahan Kimia',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 6,
    kategori: 'Lain - Lain',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
];

export interface PersediaanBankDataNamaEksProyek {
  no: number;
  namaEksPoryek: string; 
  createdBy: string; 
  createdAt: string;
}

export const dummyPersediaanBankDataNamaEksProyek: PersediaanBankDataNamaEksProyek[] = [
  {
    no: 1,
    namaEksPoryek: 'Eks Proyek Rokan',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    namaEksPoryek: 'Eks Proyek Cepu',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 3,
    namaEksPoryek: 'Eks Proyek Senipah',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
];

export interface PersediaanBankDataGudang {
  no: number;
  lokasiGudang: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataGudang: PersediaanBankDataGudang[] = [
  {
    no: 1,
    lokasiGudang: 'Jakarta',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    lokasiGudang: 'Surabaya',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 3,
    lokasiGudang: 'Brazil',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
];
export interface PersediaanBankDataNamadanKodeBarangMaterial {
  no: number;
  kode: string; 
  namaBarangMaterial: string; 
  createdBy: string; 
  createdAt: string;
}

export const dummyPersediaanBankDataNamadanKodeBarangMaterial: PersediaanBankDataNamadanKodeBarangMaterial[] = [
  {
    no: 1, 
    kode: '11.03.02.00002.30.06.06',
    namaBarangMaterial: 'Persediaan - Cook and Valve - B - Desc - Merk - Ukuran - UOM',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2, 
    kode: '11.03.02.00002.30.06.06',
    namaBarangMaterial: 'Persediaan - Cook and Valve - B - Desc - Merk - Ukuran - UOM',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 3, 
    kode: '11.03.02.00002.30.06.06',
    namaBarangMaterial: 'Persediaan - Cook and Valve - B - Desc - Merk - Ukuran - UOM',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
];

export interface PersediaanBankDataKondisi { 
  no: number;
  kondisi: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataKondisi: PersediaanBankDataKondisi[] = [
  {
    no: 1,
    kondisi: 'Baik',
    createdBy: 'Username',
    createdAt: 'MM:HH - DD/MM/YYYY'
  },
  {
    no: 2,
    kondisi: 'Tidak Baik',
    createdBy: 'Username',
    createdAt: 'MM:HH - DD/MM/YYYY'
  },
  {
    no: 3,
    kondisi: 'Rusak',
    createdBy: 'Username',
    createdAt: 'MM:HH - DD/MM/YYYY'
  },
  {
    no: 4,
    kondisi: 'Hilang',
    createdBy: 'Username',
    createdAt: 'MM:HH - DD/MM/YYYY'
  },
]

export interface PersediaanBankDataKodeAkun { 
  no: number;
  kode: string;
  nama: string;
  createdBy: string;
  createdAt: string;
}

export const dummyPersediaanBankDataKodeAkun: PersediaanBankDataKodeAkun[] = [
  {
    no: 1,
    kode: 'XX.XX.XX',
    nama: 'Kas',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    kode: 'XX.XX.XX',
    nama: 'Utang',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 3,
    kode: 'XX.XX.XX',
    nama: 'Modal',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
  {
    no: 4,
    kode: 'XX.XX.XX',
    nama: 'Persediaan',
    createdBy: 'Username',
    createdAt: 'HH:MM - DD/MM/YYYY'
  },
]


export interface QRCode {
  no: number;
  kodeBarangMaterial: string;
  namaBarangMaterial: string;
  kodeNamaProyek: string;
  uom: string;
  createdBy: string;
  createdAt: string;
}

export const dummyQRCode: QRCode[] = [
  {
    no: 1,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 2,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 3,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 4,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 5,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 6,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 7,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 8,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 9,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  },
  {
    no: 10,
    kodeBarangMaterial: "PP-123-KK",
    namaBarangMaterial: "MU-345-NU",
    kodeNamaProyek: "Panjul",
    uom: "Pcs",
    createdBy: "Username",
    createdAt: "HM:MM - DD/MM/YYYY"
  }
];

export interface Peminjaman {
  no: number;
  tanggalPeminjaman: string;
  nomorDanTanggal: string;
  approvalStatus: string;
  kodeBarang: string;
  namaBarang: string;
  uom: string;
  jumlah: number;
  hargaSatuan: number;
  totalHarga: number;
}

export const dummyPeminjaman: Peminjaman[] = [
  {
    no: 1,
    tanggalPeminjaman: '2024-11-20',
    nomorDanTanggal: 'INV-001 / 2024-11-20',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-001',
    namaBarang: 'Gas-LPJ',
    uom: 'PCS',
    jumlah: 10,
    hargaSatuan: 50000,
    totalHarga: 500000,
  },
  {
    no: 2,
    tanggalPeminjaman: '2024-11-21',
    nomorDanTanggal: 'INV-002 / 2024-11-21',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-002',
    namaBarang: 'Selang-Karbu',
    uom: 'BOX',
    jumlah: 5,
    hargaSatuan: 200000,
    totalHarga: 1000000,
  },
  {
    no: 3,
    tanggalPeminjaman: '2024-11-22',
    nomorDanTanggal: 'INV-003 / 2024-11-22',
    approvalStatus: 'Rejected',
    kodeBarang: 'BRG-003',
    namaBarang: 'Bom-TNT',
    uom: 'KG',
    jumlah: 25,
    hargaSatuan: 30000,
    totalHarga: 750000,
  },
  {
    no: 4,
    tanggalPeminjaman: '2024-11-23',
    nomorDanTanggal: 'INV-004 / 2024-11-23',
    approvalStatus: 'Approved',
    kodeBarang: 'BRG-004',
    namaBarang: 'Blue-Helmet',
    uom: 'LITER',
    jumlah: 50,
    hargaSatuan: 10000,
    totalHarga: 500000,
  },
  {
    no: 5,
    tanggalPeminjaman: '2024-11-24',
    nomorDanTanggal: 'INV-005 / 2024-11-24',
    approvalStatus: 'Waiting',
    kodeBarang: 'BRG-005',
    namaBarang: 'Tangki-Charger',
    uom: 'PCS',
    jumlah: 15,
    hargaSatuan: 75000,
    totalHarga: 1125000,
  },
];

export interface Inventaris {
  no: number;
  tanggalInventaris: string;
  approvalStatus: string;
  jenis: string;
  klasifikasi: string;
  kodeBarang: string;
  namaBarang: string;
  uom: string;
  jumlahAsset: number;
  stockOnHand: string;
  hasilPerhitunganFisik: string;
  selisih: number;
  kondisi: number;
  penjelasan: number;
}

export const dummyInventaris: Inventaris[] = [
{
    no: 1,
    tanggalInventaris: '2024-11-20',
    approvalStatus: 'Approved',
    jenis: 'Jenis A',
    klasifikasi: 'Klasifikasi A',
    kodeBarang: 'BRG-001',
    namaBarang: 'Gas-LPJ',
    uom: 'PCS',
    jumlahAsset: 10,
    stockOnHand: '10',
    hasilPerhitunganFisik: '10',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 2,
    tanggalInventaris: '2024-11-21',
    approvalStatus: 'Waiting',
    jenis: 'Jenis B',
    klasifikasi: 'Klasifikasi B',
    kodeBarang: 'BRG-002',
    namaBarang: 'Selang-Karbu',
    uom: 'BOX',
    jumlahAsset: 5,
    stockOnHand: '5',
    hasilPerhitunganFisik: '5',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 3,
    tanggalInventaris: '2024-11-22',
    approvalStatus: 'Rejected',
    jenis: 'Jenis C',
    klasifikasi: 'Klasifikasi C',
    kodeBarang: 'BRG-003',
    namaBarang: 'Bom-TNT',
    uom: 'KG',
    jumlahAsset: 25,
    stockOnHand: '25',
    hasilPerhitunganFisik: '25',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 4,
    tanggalInventaris: '2024-11-23',
    approvalStatus: 'Approved',
    jenis: 'Jenis D',
    klasifikasi: 'Klasifikasi D',
    kodeBarang: 'BRG-004',
    namaBarang: 'Blue-Helmet',
    uom: 'LITER',
    jumlahAsset: 50,
    stockOnHand: '50',
    hasilPerhitunganFisik: '50',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
},
{
    no: 5,
    tanggalInventaris: '2024-11-24',
    approvalStatus: 'Waiting',
    jenis: 'Jenis E',
    klasifikasi: 'Klasifikasi E',
    kodeBarang: 'BRG-005',
    namaBarang: 'Tangki-Charger',
    uom: 'PCS',
    jumlahAsset: 15,
    stockOnHand: '15',
    hasilPerhitunganFisik: '15',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 6,
    tanggalInventaris: '2024-11-20',
    approvalStatus: 'Approved',
    jenis: 'Jenis A',
    klasifikasi: 'Klasifikasi A',
    kodeBarang: 'BRG-001',
    namaBarang: 'Gas-LPJ',
    uom: 'PCS',
    jumlahAsset: 10,
    stockOnHand: '10',
    hasilPerhitunganFisik: '10',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 7,
    tanggalInventaris: '2024-11-21',
    approvalStatus: 'Waiting',
    jenis: 'Jenis B',
    klasifikasi: 'Klasifikasi B',
    kodeBarang: 'BRG-002',
    namaBarang: 'Selang-Karbu',
    uom: 'BOX',
    jumlahAsset: 5,
    stockOnHand: '5',
    hasilPerhitunganFisik: '5',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 8,
    tanggalInventaris: '2024-11-22',
    approvalStatus: 'Rejected',
    jenis: 'Jenis C',
    klasifikasi: 'Klasifikasi C',
    kodeBarang: 'BRG-003',
    namaBarang: 'Bom-TNT',
    uom: 'KG',
    jumlahAsset: 25,
    stockOnHand: '25',
    hasilPerhitunganFisik: '25',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 9,
    tanggalInventaris: '2024-11-23',
    approvalStatus: 'Approved',
    jenis: 'Jenis D',
    klasifikasi: 'Klasifikasi D',
    kodeBarang: 'BRG-004',
    namaBarang: 'Blue-Helmet',
    uom: 'LITER',
    jumlahAsset: 50,
    stockOnHand: '50',
    hasilPerhitunganFisik: '50',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  },
  {
    no: 10,
    tanggalInventaris: '2024-11-24',
    approvalStatus: 'Waiting',
    jenis: 'Jenis E',
    klasifikasi: 'Klasifikasi E',
    kodeBarang: 'BRG-005',
    namaBarang: 'Tangki-Charger',
    uom: 'PCS',
    jumlahAsset: 15,
    stockOnHand: '15',
    hasilPerhitunganFisik: '15',
    selisih: 0,
    kondisi: 1,
    penjelasan: 1,
  }
];

export interface HBBQRCode {  
  no: number;
  kode: string;
  namaBarangMaterial: string;
  spesifikasi: string;
  uom: string;
  createdBy: string;
  createdAt: string;
}

export const dummyHBBQRCode: HBBQRCode[] = [
  {
    no: 1,
    kode: 'BRG-001',
    namaBarangMaterial: 'Gas-LPJ',
    spesifikasi: 'Gas LPG 3 Kg',
    uom: 'PCS',
    createdBy: 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    kode: 'BRG-002',
    namaBarangMaterial: 'Selang-Karbu',
    spesifikasi: 'Selang Karburator',
    uom: 'BOX',
    createdBy: 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 3,
    kode: 'BRG-003',
    namaBarangMaterial: 'Bom-TNT',
    spesifikasi: 'Bom TNT 1 Kg',
    uom: 'KG',
    createdBy : 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 4,
    kode: 'BRG-004',
    namaBarangMaterial: 'Blue-Helmet',
    spesifikasi: 'Helm Biru',
    uom: 'LITER',
    createdBy : 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 5,
    kode: 'BRG-005',
    namaBarangMaterial: 'Tangki-Charger',
    spesifikasi: 'Tangki Charger 5 Liter',
    uom: 'LITER',
    createdBy : 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 1,
    kode: 'BRG-001',
    namaBarangMaterial: 'Gas-LPJ',
    spesifikasi: 'Gas LPG 3 Kg',
    uom: 'PCS',
    createdBy: 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 2,
    kode: 'BRG-002',
    namaBarangMaterial: 'Selang-Karbu',
    spesifikasi: 'Selang Karburator',
    uom: 'BOX',
    createdBy: 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 3,
    kode: 'BRG-003',
    namaBarangMaterial: 'Bom-TNT',
    spesifikasi: 'Bom TNT 1 Kg',
    uom: 'KG',
    createdBy : 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 4,
    kode: 'BRG-004',
    namaBarangMaterial: 'Blue-Helmet',
    spesifikasi: 'Helm Biru',
    uom: 'LITER',
    createdBy : 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },
  {
    no: 5,
    kode: 'BRG-005',
    namaBarangMaterial: 'Tangki-Charger',
    spesifikasi: 'Tangki Charger 5 Liter',
    uom: 'LITER',
    createdBy : 'Username',
    createdAt: 'HM:MM - DD/MM/YYYY'
  },

];

export interface UserManagement { 
  no: number;
  nama: string; 
  email: string;
  jabatan: string;
  detailUser: string;
  role: string;
  statusAkun: string;
}

export const dummyUserManagement: UserManagement[] = [
  {
    no: 1,
    nama: 'username',
    email: 'user@mail',
    jabatan: 'Kadept II',
    detailUser: 'Kantor JKT',
    role: 'Kepala Gudang',
    statusAkun: 'Active',
  },
  {
    no: 2,
    nama: 'akbar',
    email: 'akbar@mail',
    jabatan: 'Manajer Inventaris',
    detailUser: 'Gudang JKT',
    role: 'Admin Persedian',
    statusAkun: 'Inactive',
  },
  {
    no: 3,
    nama: 'zaki',
    email: 'zaki@mail',
    jabatan: 'Kadept II',
    detailUser: 'Kantor JKT',
    role: 'Kepala Gudang',
    statusAkun: 'Active',
  },
  {
    no: 4,
    nama: 'raka',
    email: 'raka@mail',
    jabatan: 'Manajer Inventaris',
    detailUser: 'Gudang JKT',
    role: 'Admin Persedian',
    statusAkun: 'Inactive',
  },
  {
    no: 5,
    nama: 'username',
    email: 'user@mail',
    jabatan: 'Kadept II',
    detailUser: 'Kantor JKT',
    role: 'Kepala Gudang',
    statusAkun: 'Active',
  },
  {
    no: 6,
    nama: 'akbar',
    email: 'akbar@mail',
    jabatan: 'Manajer Inventaris',
    detailUser: 'Gudang JKT',
    role: 'Admin Persedian',
    statusAkun: 'Inactive',
  },
  {
    no: 7,
    nama: 'zaki',
    email: 'zaki@mail',
    jabatan: 'Kadept II',
    detailUser: 'Kantor JKT',
    role: 'Kepala Gudang',
    statusAkun: 'Active',
  },
  {
    no: 8,
    nama: 'raka',
    email: 'raka@mail',
    jabatan: 'Manajer Inventaris',
    detailUser: 'Gudang JKT',
    role: 'Admin Persedian',
    statusAkun: 'Inactive',
  },
  {
    no: 9,
    nama: 'username',
    email: 'user@mail',
    jabatan: 'Kadept II',
    detailUser: 'Kantor JKT',
    role: 'Kepala Gudang',
    statusAkun: 'Active',
  },
  {
    no: 10,
    nama: 'akbar',
    email: 'akbar@mail',
    jabatan: 'Manajer Inventaris',
    detailUser: 'Gudang JKT',
    role: 'Admin Persedian',
    statusAkun: 'Inactive',
  }
];

export interface ActivityLog {
  nama: string;
  role: string;
  dateTime: string;
  activity: string;
};

export const dummyActivityLog: ActivityLog[] = [
  {
    nama: 'Username',
    role: 'Kepala Gudang',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menambahkan data barang baru',
  },
  {
    nama: 'Akbar',
    role: 'Admin Persedian',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menghapus data barang',
  },
  {
    nama: 'Zaki',
    role: 'Kepala Gudang',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Mengubah data barang',
  },
  {
    nama: 'Raka',
    role: 'Admin Persedian',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menambahkan data barang baru',
  },
  {
    nama: 'Username',
    role: 'Kepala Gudang',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menghapus data barang',
  },
  {
    nama: 'Akbar',
    role: 'Admin Persedian',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Mengubah data barang',
  },
  {
    nama: 'Zaki',
    role: 'Kepala Gudang',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menambahkan data barang baru',
  },
  {
    nama: 'Raka',
    role: 'Admin Persedian',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menghapus data barang',
  },
  {
    nama: 'Username',
    role: 'Kepala Gudang',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Mengubah data barang',
  },
  {
    nama: 'Akbar',
    role: 'Admin Persedian',
    dateTime: 'HM:MM - DD/MM/YYYY',
    activity: 'Menambahkan data barang baru',
  }
];