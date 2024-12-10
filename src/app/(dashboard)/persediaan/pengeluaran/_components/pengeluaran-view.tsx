"use client";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import PengeluaranTable from "./_pengeluaran-tables/index";
import { dummyPengeluaran, Pengeluaran } from "@/constants/data";
import { TambahTransaksiModal } from "./_pengeluaran-tables/modal-add";

export default function PengeluaranViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPengeluaran = dummyPengeluaran.length;
  const pengeluaran: Pengeluaran[] = dummyPengeluaran;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="Pengeluaran" description="deskripsi pengeluaran" />

          <Button
            onClick={handleOpenModal}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Tambah Transaksi
          </Button>
        </div>
        <Separator />

        <PengeluaranTable data={pengeluaran} totalData={totalPengeluaran} />
        <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
}
