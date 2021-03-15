import React from "react";
import { Spinner } from "./Spinner";
import { TweetCard, TweetCardProps } from "./TweetCard";

export interface FeedProps {
  tweets: TweetCardProps[];
}

export const Feed: React.FC<FeedProps> = ({ tweets }) => {
  return (
    <>
      {tweets.length === 0 && <Spinner />}
      {tweets.map((tweet, index) => (
        <div key={index}>
          <TweetCard {...tweet} />
        </div>
      ))}
    </>
  );
};
