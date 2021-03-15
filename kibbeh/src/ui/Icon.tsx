import React, { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <div
      className="hover:bg-gray-100 h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500"
    >
      {icon}
    </div>
  );
};
