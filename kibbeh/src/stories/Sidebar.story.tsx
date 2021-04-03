import { Story } from "@storybook/react";
import React from "react";
import { Sidebar, SidebarProps } from "../ui/Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
};

export const TheSidebar: Story<SidebarProps> = ({ ...props }) => {
  return <Sidebar />;
};

TheSidebar.bind({});
