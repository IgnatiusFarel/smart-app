"use client";
import PageContainer from "@/components/layout/page-container";
import { Button, buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import UserManagementTable from "./_usermanagement-tables/index";
import { dummyUserManagement, UserManagement } from "@/constants/data";
// import { TambahDataModal } from "./_usermanagement-tables/modal-add";
import { CalendarDateRangePicker } from "@/components/date-range-picker";

export default function UserManagementViewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalUserManagement = dummyUserManagement.length;
  const userManagement: UserManagement[] = dummyUserManagement;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title="User Management" description="deskripsi user management" />

          <div className="hidden items-center space-x-2 md:flex">
          <CalendarDateRangePicker />
          <Button
            onClick={handleOpenModal}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Tambah User
          </Button>
        </div>
        </div>
        <Separator />

        <UserManagementTable data={userManagement} totalData={totalUserManagement} />
        {/* <TambahDataModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      </div>
    </PageContainer>
  );
}
