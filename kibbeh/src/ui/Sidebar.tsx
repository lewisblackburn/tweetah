import Link from "next/link";
import React from "react";
import {
  BellIcon,
  BookmarkIcon,
  DotsCircleIcon,
  HashIcon,
  HomeIcon,
  ListIcon,
  MailIcon,
  PersonIcon,
  TwitterIcon,
} from "../icons";
import { Button } from "./Button";

interface SidebarProps {}

const navigation = [
  { title: "Home", Icon: <HomeIcon width={30} height={30} /> },
  { title: "Explore", Icon: <HashIcon width={30} height={30} /> },
  { title: "Notification", Icon: <BellIcon width={30} height={30} /> },
  { title: "Message", Icon: <MailIcon width={30} height={30} /> },
  { title: "Bookmarks", Icon: <BookmarkIcon width={30} height={30} /> },
  { title: "Lists", Icon: <ListIcon width={30} height={30} /> },
  { title: "Profile", Icon: <PersonIcon width={30} height={30} /> },
  { title: "More", Icon: <DotsCircleIcon width={30} height={30} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="flex-col col-span-1 px-9 py-3">
      <TwitterIcon width={28} height={28} />
      <div className="flex-col">
        {navigation.map((item, index: number) => (
          <div className="mt-5 -mx-4">
            <Link href="/lounge">
              <a className="flex items-center space-x-4 hover:bg-blue-500 hover:bg-opacity-40 px-4 py-2 rounded-full transition ease-in-out duration-75">
                {item.Icon}
                <span className="text-xl font-bold">{item.title}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Button color="secondary" size="big" className="my-5">
        Tweet
      </Button>
    </div>
  );
};
