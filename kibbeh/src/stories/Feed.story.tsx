import { Story } from "@storybook/react";
import src from "../img/avatar.png";
import { Feed, FeedProps } from "../ui/Feed";

export default {
  title: "Feed",
  component: Feed,
};

export const TheFeed: Story<FeedProps> = ({
  tweets = [
    {
      avatar: src,
      commentAmount: 1,
      createdAt: "unixtimestamp",
      displayname: "zxffo",
      likeAmount: 1,
      retweetAmount: 1,
      text: "teast",
      username: "zxffo",
    },
  ],
  emptyPlaceholder = <p>nothing to see here</p>,
}) => <Feed tweets={tweets} emptyPlaceholder={emptyPlaceholder} />;

TheFeed.bind({});

export const TheEmptyFeed: Story<FeedProps> = ({
  tweets = [],
  emptyPlaceholder = <p>nothing to see here</p>,
}) => <Feed tweets={tweets} emptyPlaceholder={emptyPlaceholder} />;

TheEmptyFeed.bind({});
