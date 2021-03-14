import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TweetCard, TweetCardProps } from "./TweetCard";

export interface LayoutProps {}

const boobers: TweetCardProps = {
  avatar: "../avatar.png",
  commentAmount: 1,
  createdAt: "unixtimestamp",
  displayname: "zxffo",
  likeAmount: 1,
  retweetAmount: 1,
  text: "k",
  username: "zxffo",
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-black text-white transition ease-in-out duration-75">
      <div className="grid grid-cols-3 mx-64 w-full min-h-screen">
        <div className="fixed top-0">
          <Sidebar />
        </div>
        {/* empty div for fixed */}
        <div></div>
        <main className="flex-col col-span-2 min-h-screen border-l border-r border-gray-600">
          <Header />
          <div className="h-3 bg-gray-900"></div>
          <ul className="flex-col">
            <TweetCard {...boobers} />
          </ul>
        </main>
        <aside className="pl-8 pr-2">
          <div className="mt-2">sdfasdf</div>
          <div className="mt-4"></div>
          <div className="mt-4"></div>
        </aside>
      </div>
    </div>
  );
};
