import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { NextPageContext } from "next";
import { withApollo } from "next-apollo";
import { Post } from "../generated/graphql";
import { apiBaseUrl } from "./constants";

const createClient = (ctx?: NextPageContext) =>
  new ApolloClient({
    link: createUploadLink({
      uri: apiBaseUrl,
      credentials: "include",
      headers: {
        cookie:
          (typeof window === "undefined"
            ? ctx?.req?.headers.cookie
            : undefined) || "",
      },
    }) as any,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              keyArgs: ["type"],
              merge(existing, incoming, { readField }) {
                const merged = { ...existing };
                incoming.forEach((post: Post) => {
                  // @ts-ignore
                  merged[readField("id", post)] = post;
                });
                return merged;
              },
              read(existing) {
                return existing && Object.values(existing);
              },
            },
          },
        },
      },
    }),
  });

export default withApollo(createClient);
