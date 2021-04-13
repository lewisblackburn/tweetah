import { Story } from "@storybook/react";
import React from "react";
import { ComposeTweet, ComposeTweetProps } from "../ui/ComposeTweet";

export default {
  title: "Header",
  component: ComposeTweet,
};

export const TheHeader: Story<ComposeTweetProps> = ({ ...props }) => {
  return <ComposeTweet {...props} />;
};

TheHeader.bind({});
