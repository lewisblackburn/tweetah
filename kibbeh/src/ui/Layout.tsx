import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid justify-center min-h-screen bg-black text-white">
      <div className="fixed top-0">
        <Sidebar />
      </div>
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl break-words">
        <Header src="/avatar.png" />
        {children}
      </div>
    </div>
  );
};
