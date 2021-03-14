import { Story } from "@storybook/react";
import React from "react";
import { DisplayName, DisplayNameProps } from "../ui/DisplayName";

export default {
  title: "DisplayName",
  component: DisplayName,
};

export const TheDisplayName: Story<DisplayNameProps> = ({ displayname }) => (
  <DisplayName displayname={displayname} />
);

TheDisplayName.bind({});
