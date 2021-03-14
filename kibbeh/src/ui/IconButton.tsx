import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { kFormatter } from "../lib/kFormatter";
import { Spinner } from "./Spinner";

export type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  icon: ReactNode;
  number?: number;
};

export const IconButton: React.FC<IconButtonProps> = ({
  number,
  disabled,
  loading,
  icon,
  className = "",
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`flex items-center disabled:text-accent-disabled  ${className}`}
      {...props}
    >
      {loading ? (
        <Spinner size="4" />
      ) : (
        <span>
          {icon}
          {number && <span>{kFormatter(number)}</span>}
        </span>
      )}
    </button>
  );
};
