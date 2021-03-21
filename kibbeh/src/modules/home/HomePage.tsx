import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMeQuery, useTweetsQuery } from "../../generated/graphql";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  const { data, loading } = useMeQuery();
  const { replace, pathname } = useRouter();

  useEffect(() => {
    if (!!(!loading && !data?.me)) {
      replace(`/`);
    }
  }, [data, loading, pathname, replace]);

  const {
    data: TweetData,
    loading: TweetLoading,
    fetchMore,
    previousData,
    error,
  } = useTweetsQuery({
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
      {!TweetLoading && TweetData ? (
        <Feed tweets={TweetData.tweets} />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};
