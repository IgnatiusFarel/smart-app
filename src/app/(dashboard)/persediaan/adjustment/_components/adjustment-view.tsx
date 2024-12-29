"use client";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import AdjustmentTable from "./_adjustment-tables/index";
import { dummyAdjustment, Adjustment } from "@/constants/data";
import { TambahTransaksiModal } from "./_adjustment-tables/modal-add";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function AdjustmentViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalAdjustment = dummyAdjustment.length;
  const adjustment: Adjustment[] = dummyAdjustment;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Heading title="Adjustment" description="deskripsi Adjustment" />

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

        <AdjustmentTable data={adjustment} totalData={totalAdjustment} />
        <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
}
