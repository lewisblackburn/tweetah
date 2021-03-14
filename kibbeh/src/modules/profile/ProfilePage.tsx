import React from "react";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  if (!useVerifyLoggedIn()) {
    return null;
  }

  return <div>profile page</div>;
};
