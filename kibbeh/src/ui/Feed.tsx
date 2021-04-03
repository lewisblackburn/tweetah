import React from "react";
import { RegularTweetFragment } from "../generated/graphql";
import { TweetCard } from "./TweetCard";

export interface FeedProps {
  tweets: RegularTweetFragment[];
}

export const Feed: React.FC<FeedProps> = ({ tweets }) => {
  return (
    <>
      {tweets.length === 0 && <p>you have no friends, loser</p>}
      {tweets.map((tweet, index) => (
        <div key={index}>
          <TweetCard tweet={tweet} />
        </div>
      ))}
    </>
  );
};
