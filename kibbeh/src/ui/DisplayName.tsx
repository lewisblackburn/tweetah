import React from "react";

export interface DisplayNameProps {
  displayname: string;
}

export const DisplayName: React.FC<DisplayNameProps> = ({ displayname }) => {
  return <h5 className="font-bold mr-2">{displayname}</h5>;
};
