import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
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
    <button disabled={loading || disabled} className={className} {...props}>
      {loading ? (
        <Spinner size="4" />
      ) : (
        <div className="flex items-center">
          <Icon icon={icon} />
          {number}
        </div>
      )}
    </button>
  );
};
