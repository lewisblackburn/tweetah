import React from "react";
import { AtIcon } from "../icons";

export interface UsernameProps {
  username: string;
}

export const Username: React.FC<UsernameProps> = ({ username }) => {
  return (
    <span className="flex items-center text-gray-400">
      <AtIcon width={12} height={12} className="mt-1" />
      {username}
    </span>
  );
};
