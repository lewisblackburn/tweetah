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

const TheIconButton: Story<IconButtonProps> = ({ ...props }) => {
  return <IconButton {...props} icon={<SparkleIcon />} />;
};

export const Main = TheIconButton.bind({});

Main.argTypes = {
  disabled: toBoolean(),
  loading: toBoolean(),
  number: toNumber(),
};
