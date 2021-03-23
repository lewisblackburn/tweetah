import React from "react";
import { useTweetsQuery } from "../../generated/graphql";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";
import { useFetchMoreTweets } from "../feed/UseFetchMoreTweets";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
  useVerifyLoggedIn();
  const { data, loading, fetchMore, previousData } = useTweetsQuery({
    variables: {
      take: 20,
      offset: 0,
    },
    /* pollInterval: 20000, */
    notifyOnNetworkStatusChange: true,
  });
  useFetchMoreTweets(data, loading, fetchMore, previousData);

  return (
    <Layout>
      {!data && loading ? (
        <div className="grid place-items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <Feed tweets={data!.tweets} />
          <div className="grid place-items-center pt-8">
            {previousData?.tweets.length !== (data?.tweets.length || 0) - 1 ? (
              <Spinner />
            ) : (
              <p>You're all caught up</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};
