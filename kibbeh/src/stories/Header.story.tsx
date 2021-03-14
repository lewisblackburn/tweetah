import { Story } from "@storybook/react";
import React from "react";
import { Header } from "../ui/Header";

export default {
  title: "Header",
};

const TheHeader: Story = () => {
  return <Header />;
};

export const Main = TheHeader.bind({});
