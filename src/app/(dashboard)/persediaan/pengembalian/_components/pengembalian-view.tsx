"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import PengembalianTable from "./_pengembalian-tables/index";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { dummyPersediaanPengembalian, PersediaanPengembalian} from "@/constants/data";
import { TambahTransaksiModal } from "./_pengembalian-tables/modal-add";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function PengembalianViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPengembalian = dummyPersediaanPengembalian.length;
  const pengembalian: PersediaanPengembalian[] = dummyPersediaanPengembalian;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Heading title="Pengembalian" description="deskripsi pengembalian" />

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

        <PengembalianTable data={pengembalian} totalData={totalPengembalian} />
        <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
}
