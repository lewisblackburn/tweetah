import React, { ReactNode } from "react";
import { TweetCard, TweetCardProps } from "./TweetCard";

export interface FeedProps {
  tweets: TweetCardProps[];
  emptyPlaceholder: ReactNode;
}

export const Feed: React.FC<FeedProps> = ({ tweets, emptyPlaceholder }) => {
  return (
    <div>
      {tweets.length === 0 && emptyPlaceholder}
      <ul className="flex-col">
        {tweets.map((tweet, index) => (
          <li key={index} className="border-b border-gray-600">
            <TweetCard {...tweet} />
          </li>
        ))}
      </ul>
    </div>
  );
};
