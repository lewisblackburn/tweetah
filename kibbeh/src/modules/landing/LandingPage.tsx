import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";
import { LoginForm } from "../../ui/Form/LoginForm";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { data, loading } = useMeQuery();
  const { replace, pathname } = useRouter();

  useEffect(() => {
    if (!!(!loading && data?.me)) {
      replace(`/home`);
    }
  }, [data, loading, pathname, replace]);

  return <LoginForm />;
};
