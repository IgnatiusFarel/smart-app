"use client";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import StockOpnameTable from "./_stockopname-tables/index";
import { dummyStockOpname, StockOpname } from "@/constants/data";
import { TambahDataModal } from "./_stockopname-tables/modal-add";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function StockOpnameViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalStockOpname = dummyStockOpname.length;
  const stockOpname: StockOpname[] = dummyStockOpname;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="Stock Opname" description="deskripsi stock opname" />

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

        <StockOpnameTable data={stockOpname} totalData={totalStockOpname} />
        <TambahDataModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
}