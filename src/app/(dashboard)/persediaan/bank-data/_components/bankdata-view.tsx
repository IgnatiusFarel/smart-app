"use client";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import BankDataTable from "./_bankdata-tables/index";
import { dummyBankData, BankData } from "@/constants/data";
import { columnsFungsi, columnsProyek } from "./_bankdata-tables/columns"; // Sesuaikan impor

const BankDataTypeButton = ({ onClick, isActive, children }) => (
  <Button variant={isActive ? "default" : "outline"} onClick={onClick}>
    {children}
  </Button>
);

export default function BankDataViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("default");
  const [activeButton, setActiveButton] = useState("default");
  const totalBankData = dummyBankData.length;
  const bankData: BankData[] = dummyBankData;

  const columns =
    currentView === "kelompok"
      ? columnsFungsi
      : currentView === "proyek"
      ? columnsProyek
      : columnsFungsi;
  const handleViewChange = (view) => {
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
          <div className="grid grid-cols-3 gap-4">
            <BankDataTypeButton
              onClick={() => handleViewChange("default")}
              isActive={activeButton === "default"}
            >
              Fungsi
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("kelompok")}
              isActive={activeButton === "kelompok"}
            >
              Kelompok Barang dan/atau Material
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("proyek")}
              isActive={activeButton === "proyek"}
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
              onClick={() => handleViewChange("kategori")}
              isActive={activeButton === "kategori"}
            >
              Kategori Barang dan/atau Material
            </BankDataTypeButton>
            <BankDataTypeButton
              onClick={() => handleViewChange("eksProyek")}
              isActive={activeButton === "eksProyek"}
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
              onClick={() => handleViewChange("namaKodeBarang")}
              isActive={activeButton === "namaKodeBarang"}
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
          data={bankData}
          totalData={totalBankData}
          columns={columns}
        />
      </div>
    </PageContainer>
  );
}
