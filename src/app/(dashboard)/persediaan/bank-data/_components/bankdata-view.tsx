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

export default function BankDataViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalBankData = dummyBankData.length;
  const bankData: BankData[] = dummyBankData;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Bank Data"
            description="deskripsi Bank Data"
          />

          <Button
            onClick={handleOpenModal}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Tambah Data
          </Button>
        </div>
        <Separator />

        <BankDataTable data={bankData} totalData={totalBankData} />
        {/* <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      </div>
    </PageContainer>
  );
}
