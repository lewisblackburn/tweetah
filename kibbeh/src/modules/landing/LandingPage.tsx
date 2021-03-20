import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoginForm } from "../../ui/Form/LoginForm";
import { isAuth } from "../auth/isAuth";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { replace, pathname } = useRouter();
  const user = isAuth();

  useEffect(() => {
    if (user) {
      replace(`/home`);
    }
  }, [user, pathname, replace]);

  return <LoginForm />;
};
