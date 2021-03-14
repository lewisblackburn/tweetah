import { Story } from "@storybook/react";
import React from "react";
import { Sidebar } from "../ui/Sidebar";

export default {
  title: "Sidebar",
};

const TheSidebar: Story = () => {
  return <Sidebar />;
};

export const Main = TheSidebar.bind({});
