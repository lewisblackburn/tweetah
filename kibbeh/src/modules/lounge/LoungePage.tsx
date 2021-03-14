import React from "react";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { TweetCardProps } from "../../ui/TweetCard";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface LoungePageProps {}

const tweets: TweetCardProps[] = [
  {
    avatar: "/avatar.png",
    commentAmount: 1,
    createdAt: "unixtimestamp",
    displayname: "zxffo",
    likeAmount: 1,
    retweetAmount: 1,
    text:
      "teassdfasdfasdjflkasjdfklasjdfl;kjsdlfk;jasdlkfjasdlkfjdjsfkdskjfasdjfkajsdfkdsjfkdsjf:dfasdfsdffkjasdk",
    username: "zxffo",
  },
];

export const LoungePage: React.FC<LoungePageProps> = ({}) => {
  if (!useVerifyLoggedIn()) {
    return null;
  }

  return (
    <Layout>
      <Feed tweets={tweets} emptyPlaceholder={<p>nothing to see here</p>} />
    </Layout>
  );
};
