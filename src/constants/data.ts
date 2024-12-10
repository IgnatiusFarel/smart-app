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
  export interface Penerimaan {
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
  
  export const dummyPenerimaan: Penerimaan[] = [
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
      totalHarga: 50000000000000000000,
    },
    {
      no: 2,
      tanggalPenerimaan: '2024-11-21',
      nomorDanTanggal: 'INV-002 / 2024-11-21',
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
      uom: 'PCS',
      jumlah: 15,
      kodeProyek: 'PRJ-005',
      namaProyek: 'Proyek E',
      hargaSatuan: 75000,
      totalHarga: 1125000,
    },
  ];
  
  export interface Pengembalian {
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
  
  export const dummyPengembalian: Pengembalian[] = [
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
      uom: 'PCS',
      jumlah: 15,
      kodeProyek: 'PRJ-005',
      namaProyek: 'Proyek E',
      hargaSatuan: 75000,
      totalHarga: 1125000,
    },
  ];
  
  export interface StockOpname {
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
  
  export const dummyStockOpname: StockOpname[] = [
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
      uom: 'PCS',
      jumlah: 15,
      kodeProyek: 'PRJ-005',
      namaProyek: 'Proyek E',
      hargaSatuan: 75000,
      totalHarga: 1125000,
    },
  ];
  
  export interface Penghapusan{
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
  
  export const dummyPenghapusan: Penghapusan[] = [
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
      uom: 'PCS',
      jumlah: 15,
      kodeProyek: 'PRJ-005',
      namaProyek: 'Proyek E',
      hargaSatuan: 75000,
      totalHarga: 1125000,
    },
  ];
  
  export interface Adjustment{
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
  ];
  export interface BankData{
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
  
  export const dummyBankData: BankData[] = [
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
  ];
  
  export interface QRCode{
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
  ];
  
  export interface Peminjaman{
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
  
  export const dummyPeminjaman: Peminjaman[] = [
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
      uom: 'PCS',
      jumlah: 15,
      kodeProyek: 'PRJ-005',
      namaProyek: 'Proyek E',
      hargaSatuan: 75000,
      totalHarga: 1125000,
    },
  ];
  
  export interface Inventaris{
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
  
  export const dummyInventaris: Inventaris[] = [
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
      approvalStatus: 'Pending',
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
      approvalStatus: 'Pending',
      kodeBarang: 'BRG-005',
      uom: 'PCS',
      jumlah: 15,
      kodeProyek: 'PRJ-005',
      namaProyek: 'Proyek E',
      hargaSatuan: 75000,
      totalHarga: 1125000,
    },
  ];
  
  