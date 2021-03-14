import React from "react";
import { Sidebar } from "../../ui/Sidebar";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface LoungePageProps {}

export const LoungePage: React.FC<LoungePageProps> = ({}) => {
  if (!useVerifyLoggedIn()) {
    return null;
  }

  return (
    <div className="grid grid-cols-6 w-screen h-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">main</div>
      <div className="col-span-1">sidebar</div>
    </div>
  );
};
