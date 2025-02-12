"use client";
import * as React from "react";
import {
  ChartNoAxesCombined,
  GalleryVerticalEnd,
  SquareTerminal,
  Calendar,
  ShoppingCart,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { ProfileDropdown } from "./profile-dropdown";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Hasan Rahman",
    email: "hasanrahman@example.com",
    avatar: "/avatars/logo.jpeg",
  },

  navMain: [
    {
      title: "Authentication",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Login",
          url: "/",
        },
        {
          title: "Register",
          url: "/signup",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Analytic",
      url: "analytic",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Calendar",
      url: "calendar",
      icon: Calendar,
    },
    {
      name: "Product",
      url: "product",
      icon: ShoppingCart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">My Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <div className="flex w-full flex-wrap items-center justify-center gap-3 px-4 mb-6">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
