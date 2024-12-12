"use client";

import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import PenghapusanTable from "./_penghapusan-tables/index";
import { dummyPenghapusan, Penghapusan } from "@/constants/data";
import { TambahTransaksiModal } from "./_penghapusan-tables/modal-add";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function PenghapusanViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPenghapusan = dummyPenghapusan.length;
  const penghapusan: Penghapusan[] = dummyPenghapusan;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="Penghapusan" description="deskripsi penghapusan" />

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

        <PenghapusanTable data={penghapusan} totalData={totalPenghapusan} />
        <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
     
      </div>
    </PageContainer>
  );
}
