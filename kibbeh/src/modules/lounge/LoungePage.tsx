import React from "react";
import { useTweetsQuery } from "../../generated/graphql";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface LoungePageProps {}

export const LoungePage: React.FC<LoungePageProps> = ({}) => {
  if (!useVerifyLoggedIn()) {
    return null;
  }

  const { data, loading, fetchMore, previousData, error } = useTweetsQuery({
    variables: {
      take: 10,
      cursor: {
        id: 1,
      },
    },
    /* pollInterval: 20000, */
    notifyOnNetworkStatusChange: true,
  });

  console.log(data?.tweets);

  return (
    <Layout>
      {/* TODO: typescript error here  */}
      {/* @ts-ignore */}
      {!loading && data ? <Feed tweets={data.tweets} /> : <Spinner />}
    </Layout>
  );
};
