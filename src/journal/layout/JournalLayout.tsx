import React from "react";
import { Navbar, Sidebar } from "../components";

export const JournalLayout = ({ children }: { children: React.ReactNode }) => {
  const drawerWidth = 400;

  return (
    <div className="flex">
      {/* SideBar */}

      <Sidebar drawerWidth={drawerWidth} />

      <div className="flex h-screen overflow-hidden w-full">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <main className="overflow-y-auto w-full pt-10">{children}</main>
      </div>
    </div>
  );
};
