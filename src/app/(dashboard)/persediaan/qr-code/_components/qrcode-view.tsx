"use client";

import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import QRCodeTable from "./qrcode-tables/index";
import { dummyQRCode, QRCode } from "@/constants/data";
import { TambahDataModal } from "./qrcode-tables/modal-add";

export default function QRCodeViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalQRCode = dummyQRCode.length;
  const qrCode: QRCode[] = dummyQRCode;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="QR Code" description="deskripsi qr code" />

          <Button
            onClick={handleOpenModal}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Tambah Data
          </Button>
        </div>
        <Separator />

        <QRCodeTable data={qrCode} totalData={totalQRCode} />
        <TambahDataModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </PageContainer>
  );
}
