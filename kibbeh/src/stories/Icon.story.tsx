import { Story } from "@storybook/react";
import React from "react";
import { SparkleIcon } from "../icons";
import { Icon, IconProps } from "../ui/Icon";

export default {
  title: "Icon",
  component: Icon,
};

export const TheIcon: Story<IconProps> = ({ ...props }) => {
  return <Icon icon={<SparkleIcon />} {...props} />;
};

TheIcon.bind({});
