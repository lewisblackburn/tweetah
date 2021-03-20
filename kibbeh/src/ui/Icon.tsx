import React, { ReactNode } from "react";

export interface IconProps {
  icon: ReactNode;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, className = "" }) => {
  return (
    <div className={`container flex justify-center items-center ${className}`}>
      {icon}
    </div>
  );
};
