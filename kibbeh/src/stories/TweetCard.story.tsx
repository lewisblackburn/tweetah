import { Story } from "@storybook/react";
import React from "react";
import src from "../img/avatar.png";
import { TweetCard, TweetCardProps } from "../ui/TweetCard";

export default {
  title: "TweetCard",
  component: TweetCard,
};

export const TheTweetCard: Story<TweetCardProps> = ({
  avatar = src,
  displayname = "zxffo",
  username = "zxffo",
  text = "qfadsfasdf",
  commentAmount = 1,
  retweetAmount = 1,
  likeAmount = 1,
  createdAt = "242342341243",
}) => (
  <TweetCard
    avatar={avatar}
    displayname={displayname}
    username={username}
    text={text}
    commentAmount={commentAmount}
    retweetAmount={retweetAmount}
    likeAmount={likeAmount}
    createdAt={createdAt}
  />
);

TheTweetCard.bind({});

export const TheTweetCardWithImage: Story<TweetCardProps> = ({
  avatar = src,
  displayname = "zxffo",
  username = "zxffo",
  text = "qfadsfasdf",
  image = src,
  commentAmount = 1,
  retweetAmount = 1,
  likeAmount = 1,
  createdAt = "242342341243",
}) => (
  <TweetCard
    avatar={avatar}
    displayname={displayname}
    username={username}
    text={text}
    image={image}
    commentAmount={commentAmount}
    retweetAmount={retweetAmount}
    likeAmount={likeAmount}
    createdAt={createdAt}
  />
);

TheTweetCardWithImage.bind({});
