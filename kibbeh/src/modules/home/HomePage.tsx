import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTweetsQuery } from "../../generated/graphql";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";
import { isAuth } from "../auth/isAuth";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { replace, pathname } = useRouter();
  const user = isAuth();

  useEffect(() => {
    if (!user) {
      replace(`/`);
    }
  }, [user, pathname, replace]);

  const { data, loading, fetchMore, previousData, error } = useTweetsQuery({
    variables: {
      take: 30,
      cursor: {
        id: 1,
      },
    },
    /* pollInterval: 20000, */
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Layout>
      {!loading && data ? <Feed tweets={data.tweets} /> : <Spinner />}
    </Layout>
  );
};
