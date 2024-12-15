"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { dummyInventaris, Inventaris } from "@/constants/data";
import { TambahTransaksiModal } from "./_inventaris-tables/modal-add";
import InventarisTable from "./_inventaris-tables/index";
import PageContainer from "@/components/layout/page-container";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function InventarisViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalInventaris = dummyInventaris.length;
  const inventaris: Inventaris[] = dummyInventaris;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <Heading title="Inventaris" description="deskripsi inventaris" />

        <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button
          onClick={handleOpenModal}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 h-4 w-4" /> Tambah Data
        </Button>
          </div>
     
      </div>
      <Separator />

      <InventarisTable data={inventaris} totalData={totalInventaris} />
      <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    </PageContainer>
  );
}
