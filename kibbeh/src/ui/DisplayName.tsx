import React from "react";

export interface DisplayNameProps {
  displayname: string;
}

export const DisplayName: React.FC<DisplayNameProps> = ({
  displayname = "username",
}) => {
  return <h5 className="font-bold">{displayname}</h5>;
};
