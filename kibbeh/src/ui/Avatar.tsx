import React from "react";

const avatarSizeMap = {
  default: "80px",
  sm: "40px",
  xs: "20px",
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
      <img
        alt="avatar"
        className="rounded-full w-full h-full"
        src={src || "/avatar"}
      />
    </div>
  );
};
