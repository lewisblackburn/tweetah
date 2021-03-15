import React from "react";
import { CommentIcon } from "../icons";
import { Avatar } from "./Avatar";
import { DisplayName } from "./DisplayName";
import { IconButton } from "./IconButton";
import { Username } from "./Username";

export interface TweetCardProps {
  id: number;
  createdAt: number;
  text: string;
  image: string;
  likeAmount: number;
  commentAmount: number;
  rewteetAmount: number;
  liked: boolean;
  author: {
    username: string;
    displayname: string;
  };
}

export const TweetCard: React.FC<TweetCardProps> = ({
  id,
  createdAt,
  text,
  image,
  likeAmount,
  commentAmount,
  rewteetAmount,
  liked,
  author: { username, displayname },
}) => {
  return (
    <article key={id} className="border-b border-t border-gray-900">
      <div className="flex items-center space-x-4 py-4">
        <Avatar src="" size="sm" />
        <div className="flex">
          <DisplayName displayname={displayname} />
          <Username username={username} />- {createdAt}
        </div>
      </div>
      <div className="flex-col">
        <p>{text}</p>
        {image ?? <p>display image</p>}
        <div className="flex justify-between">
          <IconButton
            icon={<CommentIcon width={16} height={16} />}
            number={1}
          />
          <IconButton
            icon={<CommentIcon width={16} height={16} />}
            number={1}
          />
          <IconButton
            icon={<CommentIcon width={16} height={16} />}
            number={1}
          />
          <IconButton
            icon={<CommentIcon width={16} height={16} />}
            number={1}
          />
        </div>
      </div>
    </article>
  );
};
