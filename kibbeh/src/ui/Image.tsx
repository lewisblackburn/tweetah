import React, { DetailedHTMLProps } from "react";

export type ImageProps = DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
};

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  return <img src={src} {...props} />;
};
