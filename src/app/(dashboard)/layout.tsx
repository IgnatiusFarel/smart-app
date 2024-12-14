"use client" 
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import PageContainer from "@/components/layout/page-container";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
      setIsMounted(true);
  }, []);
  if (!isMounted) {
      return null;
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <PageContainer scrollable>{children}</PageContainer>
      </SidebarInset>
    </SidebarProvider>
  );
}
