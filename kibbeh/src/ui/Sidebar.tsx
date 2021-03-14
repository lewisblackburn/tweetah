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

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="flex-col bg-primary-100 w-full h-full px-5 p-1">
      <TwitterIcon width={24} height={24} />
      <Link href="/home">
        <div className="flex items-center space-x-10">
          <HomeIcon />
          <div>home</div>
          <div>home</div>
        </div>
      </Link>
      <Link href="/explore">
        <HashIcon />
      </Link>
      <Link href="/notifications">
        <BellIcon />
      </Link>
      <Link href="/messages">
        <MailIcon />
      </Link>
      <Link as="i/bookmarks" href="/bookmarks">
        <BookmarkIcon />
      </Link>
      <Link as="/userr/lists" href="/list">
        <ListIcon />
      </Link>
      <Link href="/BarackObama">
        <PersonIcon />
      </Link>
      <DotsCircleIcon />
      <Button>Logout</Button>
    </div>
  );
};
