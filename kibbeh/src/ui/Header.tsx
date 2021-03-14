import React from "react";
import { SparkleIcon } from "../icons";
import { IconButton } from "./IconButton";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="bg-black text-xl font-bold flex justify-between px-4 py-3 border-b border-gray-600">
      <span>Home</span>
      <IconButton icon={<SparkleIcon />} />
    </header>
  );
};
