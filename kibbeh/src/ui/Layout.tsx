import React from "react";
import { SparkleIcon } from "../icons";
import { Sidebar } from "./Sidebar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white transition ease-in-out duration-75">
      <div
        className="grid grid-cols-3 mx-64 w-full min-h-screen"
        style={{ gridTemplateColumns: "250px 1fr 350px" }}
      >
        <div className="fixed top-0">
          <Sidebar />
        </div>
        {/* empty div for fixed */}
        <div></div>
        <main className="flex-col min-h-screen border-l border-r border-gray-600">
          <header className=" bg-black text-xl font-bold flex justify-between px-4 py-3 border-b border-gray-600">
            <span>Home</span>
            <SparkleIcon />
          </header>
          <div className="h-3 bg-gray-900"></div>
          {children}
        </main>
        <aside>
          <div className="fixed top-0">aside</div>
        </aside>
      </div>
    </div>
  );
};
