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

export default function AdjustmentViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalAdjustment = dummyAdjustment.length;
  const adjustment: Adjustment[] = dummyAdjustment;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="Adjustment" description="deskripsi Adjustment" />

          <Button
            onClick={handleOpenModal}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Tambah Transaksi
          </Button>
        </div>
        <Separator />

        <AdjustmentTable data={adjustment} totalData={totalAdjustment} />
        <TambahTransaksiModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
}
