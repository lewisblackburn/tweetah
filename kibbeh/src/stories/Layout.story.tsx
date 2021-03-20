import { Story } from "@storybook/react";
import React from "react";
import { Layout, LayoutProps } from "../ui/Layout";

export default {
  title: "Layout",
  component: Layout,
};

export const TheLayout: Story<LayoutProps> = ({ ...props }) => {
  return <Layout {...props}>test</Layout>;
};

TheLayout.bind({});
