import React from "react";
import { LazyImage } from "./LazyImage";

const avatarSizeMap = {
  default: "80px",
  sm: "50px",
  xs: "40px",
};

export interface AvatarProps {
  size: keyof typeof avatarSizeMap;
  src: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = "default",
  className = "",
}) => {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width: avatarSizeMap[size],
        height: avatarSizeMap[size],
      }}
    >
      <LazyImage alt="avatar" className="rounded-full" src={src} />
    </div>
  );
};
