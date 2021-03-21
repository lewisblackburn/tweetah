import React from "react";
import { useTweetsQuery } from "../../generated/graphql";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  useVerifyLoggedIn();
  const { data, loading, fetchMore, previousData, error } = useTweetsQuery({
    variables: {
      take: 30,
      offset: 0,
    },
    /* pollInterval: 20000, */
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Layout>
      {!loading && data ? (
        <Feed tweets={data.tweets} />
      ) : (
        <div className="grid place-items-center">
          <Spinner />
        </div>
      )}
    </Layout>
  );
};
