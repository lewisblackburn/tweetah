import gql from "graphql-tag";
import React, { useState } from "react";
import { RegularTweetFragment, useLikeMutation } from "../generated/graphql";
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

const LikeButton = ({
  id,
  liked,
  likeAmount,
}: {
  id: number;
  liked: boolean;
  likeAmount: number;
}) => {
  const [loading, setLoading] = useState(false);
  const [like] = useLikeMutation();
  return (
    <IconButton
      icon={
        <HeartIcon
          fill={liked ? "#EF4444" : ""}
          className={liked ? "text-red-500" : ""}
          width={16}
          height={16}
        />
      }
      onClick={async () => {
        setLoading(true);
        await like({
          variables: {
            tweetId: id,
          },
          update: (cache) =>
            cache.writeFragment({
              id: "Tweet:" + id,
              fragment: gql`
                fragment __ on Tweet {
                  liked
                  likeAmount
                }
              `,
              data: {
                liked: !liked,
                likeAmount: liked ? likeAmount - 1 : likeAmount + 1,
              },
            }),
        });
        setLoading(false);
      }}
      loading={loading}
      number={likeAmount}
    />
  );
};

export const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  return (
    <article key={tweet.id}>
      <div className="flex items-center space-x-4 py-4">
        <Avatar
          src={`${apiBaseUrl}/../images/${tweet.author.id}/avatar.png`}
          size="xs"
        />
        <div className="flex space-x-2">
          <div className="flex">
            <DisplayName displayname={tweet.author.displayname} />
            <Username username={tweet.author.username} />
          </div>
          <span>{parseDate(tweet.createdAt)}</span>
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
          <LikeButton
            id={tweet.id}
            liked={tweet.liked}
            likeAmount={tweet.likeAmount}
          />
          <IconButton icon={<ShareIcon width={16} height={16} />} />
        </div>
      </div>
    </article>
  );
};
