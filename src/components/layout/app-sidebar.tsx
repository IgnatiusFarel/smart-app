"use client";
import * as React from "react";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { menuItems } from "./menu-items";
import Link from "next/link";
import IconPgn from "@/assets/images/PGN_Solution.png";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border flex justify-center items-center">
        <Image
          src={IconPgn}
          width={170}
          alt="PGN Solution"
          style={{ objectFit: "contain"}}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0 p-0 m-0 pt-2 overflow-x-hidden">
        {menuItems.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible gap-0"
          >
            <SidebarGroup className="py-2">
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-[#232323] hover:bg-blue-100 hover:text-[#232323]"
              >
                <CollapsibleTrigger>
                  {item.icon}
                  {item.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((subItem) => {
                      const isActive = pathname === subItem.url;
                      return (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton
                            asChild
                            className={`text-[13px] ml-6 rounded-md px-2 py-1 ${
                              isActive
                                ? "bg-blue-300 text-[#232323] hover:bg-blue-200"
                                : "text-[#232323] hover:bg-blue-100"
                            }`}
                          >
                            <Link href={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
