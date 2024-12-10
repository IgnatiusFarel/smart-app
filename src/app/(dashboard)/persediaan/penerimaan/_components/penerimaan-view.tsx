"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { dummyPenerimaan, Penerimaan } from "@/constants/data";
import { TambahTransaksiModal } from "./_penerimaan-tables/modal-add";
import PenerimaanTable from "./_penerimaan-tables/index";
import PageContainer from "@/components/layout/page-container";

export default function PenerimaanViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPenerimaan = dummyPenerimaan.length;
  const penerimaan: Penerimaan[] = dummyPenerimaan;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <Heading title="Penerimaan" description="deskripsi penerimaan" />

        <Button
          onClick={handleOpenModal}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Tambah Transaksi
        </Button>
      </div>
      <Separator />

      <PenerimaanTable data={penerimaan} totalData={totalPenerimaan} />
      <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    </PageContainer>
  );
}
