import { Story } from "@storybook/react";
import React from "react";
import { TweetCard, TweetCardProps } from "../ui/TweetCard";

export default {
  title: "TweetCard",
  component: TweetCard,
};

export const TheTweetCard: Story<TweetCardProps> = ({ ...props }) => {
  return <TweetCard {...props} />;
};

TheTweetCard.bind({});
