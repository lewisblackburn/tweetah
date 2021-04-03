import { Story } from "@storybook/react";
import React from "react";
import src from "../img/avatar.png";
import { Header, HeaderProps } from "../ui/Header";

export default {
  title: "Header",
  component: Header,
};

export const TheHeader: Story<HeaderProps> = ({ ...props }) => {
  return <Header src={src} {...props} />;
};

TheHeader.bind({});
