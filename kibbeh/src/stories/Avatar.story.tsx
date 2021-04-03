import { Story } from "@storybook/react";
import React from "react";
import src from "../img/avatar.png";
import { Avatar, AvatarProps } from "../ui/Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

export const TheAvatar: Story<AvatarProps> = ({ ...props }) => {
  return <Avatar {...props} src={src} />;
};

TheAvatar.bind({});
