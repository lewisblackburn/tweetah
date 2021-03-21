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
  return (
    <button
      disabled={loading || disabled}
      className={`flex items-center ${className}`}
      {...props}
    >
      {loading ? (
        <Spinner size="4" />
      ) : (
        <div className="flex items-center m-2">
          <Icon icon={icon} className="mr-2" />
          {number && kFormatter(number)}
        </div>
      )}
    </button>
  );
};
