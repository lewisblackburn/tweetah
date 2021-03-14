import { Story } from "@storybook/react";
import React from "react";
import { SparkleIcon } from "../icons";
import { Button, ButtonProps } from "../ui/Button";
import { toBoolean } from "./utils/toBoolean";
import { toEnum } from "./utils/toEnum";

export default {
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
};

const TheButton: Story<ButtonProps & { exampleIcon?: boolean }> = ({
  children,
  exampleIcon,
  ...props
}) => {
  return (
    <Button {...props} icon={exampleIcon ? <SparkleIcon /> : undefined}>
      {children || `New room`}
    </Button>
  );
};

export const Main = TheButton.bind({});

Main.argTypes = {
  color: toEnum(["primary", "secondary"]),
  size: toEnum(["big", "small"]),
  disabled: toBoolean(),
  loading: toBoolean(),
  exampleIcon: toBoolean(),
};
