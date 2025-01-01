"use client";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import BankDataTable from "./_bankdata-tables/index";
import { 
  dummyPersediaanBankDataFungsi, 
  dummyPersediaanBankDataGudang, 
  dummyPersediaanBankDataKategoriBarangMaterial, 
  dummyPersediaanBankDataKelompokBarangMaterial, 
  dummyPersediaanBankDataKodeAkun, 
  dummyPersediaanBankDataKodedanNamaProyek, 
  dummyPersediaanBankDataKondisi, 
  dummyPersediaanBankDataNamadanKodeBarangMaterial, 
  dummyPersediaanBankDataNamaEksProyek, 
  dummyPersediaanBankDataUOM 
} from "@/constants/data";
import { columnsFungsi, columnsGudang, columnsKategoriBarangMaterial, columnsKelompokBarangMaterial, columnsKodeAkun, columnsKodedanNamaProyek, columnsKondisi, columnsNamadanKodeBarangMaterial, columnsNamaEksProyek, columnsUOM } from "./_bankdata-tables/columns"; 

interface BankDataTypeButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

const BankDataTypeButton: React.FC<BankDataTypeButtonProps> = ({ onClick, isActive, children }) => (
  <Button variant={isActive ? "default" : "outline"} onClick={onClick}>
    {children}
  </Button>
);

export default function BankDataViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("fungsi");
  const [activeButton, setActiveButton] = useState("fungsi");

  const { data, columns } = (() => {
    switch (currentView) {
      case "fungsi":
        return { data: dummyPersediaanBankDataFungsi, columns: columnsFungsi };
      case "kelompokBarangMaterial":
        return { data: dummyPersediaanBankDataKelompokBarangMaterial, columns: columnsKelompokBarangMaterial };
      case "kodedanNamaProyek":
        return { data: dummyPersediaanBankDataKodedanNamaProyek, columns: columnsKodedanNamaProyek };
      case "uom":
        return { data: dummyPersediaanBankDataUOM, columns: columnsUOM };
      case "kategoriBarangMaterial":
        return { data: dummyPersediaanBankDataKategoriBarangMaterial, columns: columnsKategoriBarangMaterial };
      case "namaEksProyek":
        return { data: dummyPersediaanBankDataNamaEksProyek, columns: columnsNamaEksProyek };
      case "gudang":
        return { data: dummyPersediaanBankDataGudang, columns: columnsGudang };
      case "namadanKodeBarangMaterial":
        return { data: dummyPersediaanBankDataNamadanKodeBarangMaterial, columns: columnsNamadanKodeBarangMaterial };
      case "kondisi":
        return { data: dummyPersediaanBankDataKondisi, columns: columnsKondisi };
      case "kodeAkun":
        return { data: dummyPersediaanBankDataKodeAkun, columns: columnsKodeAkun };
      default:
        return { data: [], columns: [] };
    }
  })();

  type BankDataView = 
  | "fungsi"
  | "kelompokBarangMaterial"
  | "kodedanNamaProyek"
  | "uom"
  | "kategoriBarangMaterial"
  | "namaEksProyek"
  | "gudang"
  | "namadanKodeBarangMaterial"
  | "kondisi"
  | "kodeAkun";

const handleViewChange = (view: BankDataView) => {
  setActiveButton(view);
  setCurrentView(view);
};

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Heading title="Bank Data" description="Deskripsi Bank Data" />
            <Button
              onClick={handleOpenModal}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <Plus className="mr-2 h-4 w-4" /> Tambah Data
            </Button>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-4">
          <BankDataTypeButton
              onClick={() => handleViewChange("fungsi")}
              isActive={activeButton === "fungsi"}
            >
              Fungsi
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("kelompokBarangMaterial")}
              isActive={activeButton === "kelompokBarangMaterial"}
            >
              Kelompok Barang dan/atau Material
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("kodedanNamaProyek")}
              isActive={activeButton === "kodedanNamaProyek"}
            >
              Kode dan Nama Proyek
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("uom")}
              isActive={activeButton === "uom"}
            >
              UOM
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("kategoriBarangMaterial")}
              isActive={activeButton === "kategoriBarangMaterial"}
            >
              Kategori Barang dan/atau Material
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("namaEksProyek")}
              isActive={activeButton === "namaEksProyek"}
            >
              Nama Eks Proyek
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("gudang")}
              isActive={activeButton === "gudang"}
            >
              Gudang
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("namadanKodeBarangMaterial")}
              isActive={activeButton === "namadanKodeBarangMaterial"}
            >
              Nama dan Kode Barang dan/atau Material
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("kondisi")}
              isActive={activeButton === "kondisi"}
            >
              Kondisi
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("kodeAkun")}
              isActive={activeButton === "kodeAkun"}
            >
              Kode Akun
            </BankDataTypeButton>
          </div>
        </div>

        <Separator />

        <BankDataTable
          data={data}
          totalData={data.length}
          columns={columns}
        />
      </div>
    </PageContainer>
  );
}
