"use client";

import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import PenghapusanTable from "./_penghapusan-tables/index";
import { dummyPersediaanPenghapusan, PersediaanPenghapusan } from "@/constants/data";
import { TambahTransaksiModal } from "./_penghapusan-tables/modal-add";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function PenghapusanViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPenghapusan = dummyPersediaanPenghapusan.length;
  const penghapusan: PersediaanPenghapusan[] = dummyPersediaanPenghapusan;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Heading title="Penghapusan" description="deskripsi penghapusan" />

          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:space-x-2 space-y-2 lg:space-y-0">
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
