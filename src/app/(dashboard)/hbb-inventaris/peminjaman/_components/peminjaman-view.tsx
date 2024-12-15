"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { dummyPeminjaman, Peminjaman } from "@/constants/data";
import { TambahTransaksiModal } from "./_peminjaman-tables/modal-add";
import PeminjamanTable from "./_peminjaman-tables/index";
import PageContainer from "@/components/layout/page-container";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function PeminjamanViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPeminjaman = dummyPeminjaman.length;
  const peminjaman: Peminjaman[] = dummyPeminjaman;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <Heading title="Peminjaman" description="deskripsi peminjaman" />

        <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button
          onClick={handleOpenModal}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Tambah Transaksi
        </Button>
          </div>
     
      </div>
      <Separator />

      <PeminjamanTable data={peminjaman} totalData={totalPeminjaman} />
      <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    </PageContainer>
  );
}
