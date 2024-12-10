import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import PageContainer from "@/components/layout/page-container";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
