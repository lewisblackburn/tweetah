import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import { kFormatter } from "../lib/kFormatter";
import { Icon } from "./Icon";
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
  console.log(number);
  return (
    <button
      disabled={loading || disabled}
      className={`flex items-center ${className}`}
      {...props}
    >
      {loading ? (
        <Spinner size="4" />
      ) : (
        <div
          className={`grid ${
            number !== undefined ? "grid-cols-2" : "grid-cols-1"
          } items-center m-2 gap-2`}
        >
          <Icon icon={icon} />
          {number && kFormatter(number)}
        </div>
      )}
    </button>
  );
};
