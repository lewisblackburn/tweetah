import React from "react";
import { Sidebar } from "./Sidebar";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen bg-black text-white">
      <div className="fixed top-0">
        <Sidebar />
      </div>
      <div className="ml-20 max-w-xl break-words p-8">{children}</div>
    </div>
  );
};
