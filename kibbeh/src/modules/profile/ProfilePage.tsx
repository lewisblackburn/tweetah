import React from "react";
import { useProfileQuery } from "../../generated/graphql";
import { Header } from "../../ui/Header";
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
        <div className="w-full h-full border-l border-r border-gray-900">
          <Header>
            <div className="px-8">
              <h1>{data?.me?.username}</h1>
            </div>
          </Header>
          <img src={data!.me!.coverPhoto} alt="coverphoto" />
          <img
            className="w-32 h-32 rounded-full ml-8 border-2 border-black"
            style={{ transform: "translateY(-50%)" }}
            src={data!.me!.avatar}
            alt="avatar"
          />
          <div className="ml-8" style={{ transform: "translateY(-50%)" }}>
            <h1 className="font-bold">{data?.me?.displayname}</h1>
            <h2 className="text-gray-500">@{data?.me?.username}</h2>
            <p>{data?.me?.bio}</p>
            <div className="flex space-x-4">
              <span>{data?.me?.location} location</span>
              <h1>{data?.me?.website} website</h1>
              <h1>{data?.me?.dob} dob</h1>
              <h1>{data?.me?.createdAt}</h1>
            </div>
            <div className="flex space-x-4">
              <h1>{data?.me?.followingAmount} Following</h1>
              <h1>{data?.me?.followerAmount} Followers</h1>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
