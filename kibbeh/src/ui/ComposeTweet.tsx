import React from "react";
import {
  CalendarIcon,
  ChartIcon,
  FaceIcon,
  GifIcon,
  PhotoIcon,
} from "../icons";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import AutoTextArea from "./Form/AutoTextArea";

export interface ComposeTweetProps {
  avatar: string;
}

export const ComposeTweet: React.FC<ComposeTweetProps> = ({ avatar }) => {
  return (
    <div className="flex px-4 py-3">
      <div className="mr-4">
        <Avatar size="default" src={avatar} />
      </div>
      <div className="flex-col flex-1">
        <div className="grow-wrap">
          <AutoTextArea
            className="bg-transparent text-lg resize-none w-full"
            placeholder="What's happening?"
          />
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex text-sm text-primary">
            <li className="mr-4">
              <PhotoIcon />
            </li>
            <li className="mr-4">
              <GifIcon />
            </li>
            <li className="mr-4">
              <ChartIcon />
            </li>
            <li className="mr-4">
              <FaceIcon />
            </li>
            <li className="mr-4">
              <CalendarIcon />
            </li>
          </ul>
          <ul className="flex items-center text-sm text-primary">
            <li className="mr-4">
              <svg
                className="text-2xl fill-current"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="50%"
                  cy="50%"
                  fill="none"
                  strokeWidth="2"
                  r="9"
                  stroke="#38444D"
                ></circle>
                <circle
                  cx="50%"
                  cy="50%"
                  fill="none"
                  strokeWidth="2"
                  r="9"
                  stroke="#1DA1F2"
                  strokeLinecap="round"
                  style={{
                    strokeDashoffset: "55.3369px",
                    strokeDasharray: "56.5487px",
                  }}
                ></circle>
              </svg>
            </li>
            <li className="mr-4">
              {/* <BsPlusCircle className="text-xl" /> */}
            </li>
            <li>
              <Button>Tweet</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
