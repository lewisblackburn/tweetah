import React from "react";
import { usePostsQuery } from "../../generated/graphql";
import { Feed } from "../../ui/Feed";
import { Layout } from "../../ui/Layout";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface LoungePageProps {}

export const LoungePage: React.FC<LoungePageProps> = ({}) => {
  if (!useVerifyLoggedIn()) {
    return null;
  }

  const { data, loading, fetchMore, previousData, error } = usePostsQuery({
    variables: {
      take: 5,
      skip: 0,
    },
    /* pollInterval: 20000, */
    notifyOnNetworkStatusChange: true,
  });
  console.log(data);

  return (
    <Layout>
      <Feed tweets={[]} emptyPlaceholder={<p>Nothing to see here...</p>} />
    </Layout>
  );
};
