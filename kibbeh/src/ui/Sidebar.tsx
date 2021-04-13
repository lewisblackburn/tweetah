import { useApolloClient } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { useLogoutMutation } from "../generated/graphql";
import {
  BellIcon,
  BookmarkIcon,
  DotsCircleIcon,
  HashIcon,
  ListIcon,
  LogoutIcon,
  MailIcon,
  PersonIcon,
  TwitterIcon,
} from "../icons";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";

export interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [logout, { loading }] = useLogoutMutation();
  const apolloClient = useApolloClient();

  return (
    <ul className="flex flex-col items-center justify-between text-gray-700 shadow h-screen w-32 py-8">
      <li>
        <Link href="/home">
          <a>
            <Icon icon={<TwitterIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <a>
            <Icon icon={<HashIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/notifications">
          <a>
            <Icon icon={<BellIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <a>
            <Icon icon={<MailIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/bookmarks">
          <a>
            <Icon icon={<BookmarkIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/lists">
          <a>
            <Icon icon={<ListIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/profile">
          <a>
            <Icon icon={<PersonIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/more">
          <a>
            <Icon icon={<DotsCircleIcon width={24} height={24} />} />
          </a>
        </Link>
      </li>
      <li>
        <IconButton
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
          loading={loading}
          icon={<LogoutIcon width={24} height={24} />}
        />
      </li>
    </ul>
  );
};
