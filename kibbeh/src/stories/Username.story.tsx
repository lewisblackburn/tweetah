import { Story } from "@storybook/react";
import React from "react";
import { Username, UsernameProps } from "../ui/Username";

export default {
  title: "Username",
  component: Username,
};

export const TheUsername: Story<UsernameProps> = ({ ...props }) => {
  return <Username {...props} />;
};

TheUsername.bind({});
