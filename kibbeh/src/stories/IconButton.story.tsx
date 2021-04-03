import { Story } from "@storybook/react";
import React from "react";
import { SparkleIcon } from "../icons";
import { IconButton, IconButtonProps } from "../ui/IconButton";
import { toBoolean } from "./utils/toBoolean";
import { toNumber } from "./utils/toNumber";

export default {
  title: "IconButton",
  argTypes: { onClick: { action: "clicked" } },
};

const TheIconButton: Story<IconButtonProps> = ({ icon, ...props }) => {
  return <IconButton icon={<SparkleIcon />} {...props} />;
};

export const Main = TheIconButton.bind({});

Main.argTypes = {
  number: toNumber(),
  disabled: toBoolean(),
  loading: toBoolean(),
};
