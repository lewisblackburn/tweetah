import { useApolloClient } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useLogoutMutation } from "../generated/graphql";
import {
  BellIcon,
  BookmarkIcon,
  DotsCircleIcon,
  HashIcon,
  HomeIcon,
  ListIcon,
  MailIcon,
  PersonIcon,
  SparkleIcon,
  TwitterIcon,
} from "../icons";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";

export interface SidebarProps {}

const navigation = [
  { title: "Home", Icon: <HomeIcon width={24} height={24} /> },
  { title: "Explore", Icon: <HashIcon width={24} height={24} /> },
  { title: "Notification", Icon: <BellIcon width={24} height={24} /> },
  { title: "Message", Icon: <MailIcon width={24} height={24} /> },
  { title: "Bookmarks", Icon: <BookmarkIcon width={24} height={24} /> },
  { title: "Lists", Icon: <ListIcon width={24} height={24} /> },
  { title: "Profile", Icon: <PersonIcon width={24} height={24} /> },
  { title: "More", Icon: <DotsCircleIcon width={24} height={24} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  const router = useRouter();
  const [logout, loading] = useLogoutMutation();
  const apolloClient = useApolloClient();

  return (
    <aside className="flex flex-col items-center text-gray-700 shadow h-screen">
      <div className="h-16 flex items-center w-full">
        <Link href="/lounge">
          <a className="h-6 w-6 mx-auto">
            <TwitterIcon width={24} height={24} />
          </a>
        </Link>
      </div>
      <ul>
        {navigation.map((item, index) => (
          <li key={index} className="hover:bg-gray-100">
            <Link href="/lounge">
              <div>
                <Icon icon={item.Icon} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto h-16 flex items-center w-full">
        <IconButton
          onClick={() => {
            router.replace("/?next=" + router.asPath).then(async () => {
              await apolloClient.resetStore();
              logout();
            });
          }}
          icon={<SparkleIcon width={24} height={24} />}
        />
      </div>
    </aside>
  );
};
