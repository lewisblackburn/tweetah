import React from "react";
import { CommentIcon, HeartIcon, RetweetIcon, ShareIcon } from "../icons";
import { Avatar } from "./Avatar";
import { DisplayName } from "./DisplayName";
import { IconButton } from "./IconButton";
import { Username } from "./Username";

export interface TweetCardProps {
  displayname: string;
  username: string;
  avatar: string;
  text: string;
  image?: string;
  commentAmount: number;
  retweetAmount: number;
  likeAmount: number;
  createdAt: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({
  displayname,
  username,
  avatar,
  text,
  image,
  commentAmount,
  retweetAmount,
  likeAmount,
  createdAt,
}) => {
  return (
    <article className="flex px-4 py-3">
      <Avatar size="sm" src={avatar} />
      <section className="flex-col px-4 flex-1">
        <div className="flex">
          <DisplayName displayname={displayname} />
          <Username username={username} />
          <span className="text-gray-400">- {createdAt}</span>
        </div>
        <p className="mt-1">{text}</p>
        {image && <img src={image} alt="post image" />}
        <ul className="flex justify-between text-sm text-gray-400 mt-4 pr-32">
          <li>
            <IconButton
              icon={<CommentIcon width={16} height={16} />}
              number={commentAmount}
            />
          </li>
          <li>
            <IconButton
              icon={<RetweetIcon width={16} height={16} />}
              number={retweetAmount}
            />
          </li>
          <li>
            <IconButton
              icon={<HeartIcon width={16} height={16} />}
              number={likeAmount}
            />
          </li>
          <li>
            <IconButton icon={<ShareIcon width={16} height={16} />} />
          </li>
        </ul>
      </section>
    </article>
  );
};
