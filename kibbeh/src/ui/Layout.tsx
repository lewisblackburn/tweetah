import React from "react";
import { Sidebar } from "./Sidebar";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen bg-black text-white">
      <div className="grid justify-items-center">
        <div className="fixed top-0">
          <Sidebar />
        </div>
        <div className="ml-32 break-words">{children}</div>
      </div>
    </div>
  );
};
