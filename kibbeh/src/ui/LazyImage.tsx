import Image from "next/image";
import React, { useState } from "react";

export interface LazyImageProps {
  src: string;
  alt: string;
  className: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-center bg-cover`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={className}
        onError={(e) => setImageSrc("/placeholder.png")}
      />
    </div>
  );
};
