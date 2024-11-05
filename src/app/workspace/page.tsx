// page.tsx

import React from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <Sidebar side="left">
        <SidebarContent className="mx-auto">left sidebar</SidebarContent>
      </Sidebar>
      <main className="flex flex-col w-full">
        <nav className="flex gap-2 items-center justify-between">
          {/* left sidebar trigger */}
          <SidebarTrigger />
          {/* right sidebar trigger */}
          <SidebarTrigger />
        </nav>

        {/* Place the main page content here */}
        <div className="flex flex-grow justify-center bg-secondary">
          Your main content goes here
        </div>
      </main>
      <Sidebar side="right">
        <SidebarContent className="mx-auto">right sidebar</SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
