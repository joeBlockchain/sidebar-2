"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Calendars } from "@/components/calendars";
import { DatePicker } from "@/components/date-picker";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
};

interface SidebarRightProps extends React.ComponentProps<typeof Sidebar> {
  isOpen: boolean;
}

export function SidebarRight({ isOpen, ...props }: SidebarRightProps) {
  return (
    <Sidebar
      collapsible="none"
      className={`sticky top-0 h-svh border-l transition-all duration-300
        ${
          isOpen
            ? "w-[23rem] translate-x-0"
            : "w-0 overflow-hidden translate-x-full"
        }
      `}
      {...props}
    >
      {isOpen && (
        <>
          <SidebarHeader className="h-16 border-b border-sidebar-border">
            <NavUser user={data.user} />
          </SidebarHeader>
          <SidebarContent>
            <DatePicker />
            <SidebarSeparator className="mx-0" />
            <Calendars calendars={data.calendars} />
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Plus />
                  <span>New Calendar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </>
      )}
    </Sidebar>
  );
}
