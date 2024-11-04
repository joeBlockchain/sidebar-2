"use client";

import React, { useState } from "react";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { MessageSquare } from "lucide-react";

export default function Page() {
  const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(true);

  const toggleSidebarRight = () => setIsSidebarRightOpen((prev) => !prev);

  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        {/* Content Header */}
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {/* SidebarRight Trigger */}
            <button
              onClick={toggleSidebarRight}
              className="ml-auto p-2 rounded hover:bg-gray-200"
              aria-label="Toggle Right Sidebar"
            >
              <MessageSquare size={16} />
            </button>
          </div>
        </header>
        {/* Content Body */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto h-24 w-full rounded-xl bg-muted/50" />
          <div className="mx-auto h-[100vh] w-full rounded-xl bg-muted/50" />
        </div>
      </SidebarInset>
      <SidebarRight isOpen={isSidebarRightOpen} />
    </SidebarProvider>
  );
}
