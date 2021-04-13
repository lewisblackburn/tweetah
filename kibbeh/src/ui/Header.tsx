import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="py-8">{children}</header>;
};
