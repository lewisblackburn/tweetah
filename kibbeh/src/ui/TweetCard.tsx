import React from "react";
import { RegularTweetFragment } from "../generated/graphql";
import { CommentIcon, HeartIcon, RetweetIcon, ShareIcon } from "../icons";
import { apiBaseUrl } from "../lib/constants";
import { parseDate } from "../lib/parseDate";
import { Avatar } from "./Avatar";
import { DisplayName } from "./DisplayName";
import { IconButton } from "./IconButton";
import { Username } from "./Username";

export interface TweetCardProps {
  tweet: RegularTweetFragment;
}

export const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  return (
    <article key={tweet.id} className="border-b border-t border-gray-900">
      <div className="flex items-center space-x-4 py-4">
        <Avatar
          src={`${apiBaseUrl}/../images/${tweet.author.id}/avatar.png`}
          size="xs"
        />
        <div className="flex">
          <DisplayName displayname={tweet.author.displayname} />
          <Username username={tweet.author.username} />
          {parseDate(tweet.createdAt)}
        </div>
      </div>
      <div className="flex-col">
        <p>{tweet.text}</p>
        {tweet.image !== null && <p>display image</p>}
        <div className="flex justify-between">
          <IconButton
            icon={<CommentIcon width={16} height={16} />}
            number={tweet.commentAmount}
          />
          <IconButton
            icon={<RetweetIcon width={16} height={16} />}
            number={tweet.retweetAmount}
          />
          <IconButton
            icon={<HeartIcon width={16} height={16} />}
            number={tweet.likeAmount}
          />
          <IconButton icon={<ShareIcon width={16} height={16} />} />
        </div>
      </div>
    </article>
  );
};
