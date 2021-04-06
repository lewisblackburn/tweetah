import React from "react";
import { useProfileQuery } from "../../generated/graphql";
import { Layout } from "../../ui/Layout";
import { Spinner } from "../../ui/Spinner";

interface ProfilePageProps {}

export const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  const { data, loading, error } = useProfileQuery({
    variables: {
      take: 10,
      offset: 0,
    },
  });
  console.log(data, loading, error);

  return (
    <Layout>
      {!data && loading ? (
        <div className="grid place-items-center">
          <Spinner />
        </div>
      ) : (
        <div>profile</div>
      )}
    </Layout>
  );
};
