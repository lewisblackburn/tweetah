import { Story } from "@storybook/react";
import React from "react";
import src from "../img/avatar.png";
import { ComposeTweet, ComposeTweetProps } from "../ui/ComposeTweet";

export default {
  title: "ComposeTweet",
  component: ComposeTweet,
};

export const TheComposeTweet: Story<ComposeTweetProps> = ({}) => (
  <ComposeTweet avatar={src} />
);

TheComposeTweet.bind({});
