import { PostsQuery } from "generated/graphql";

export const useFetchMorePosts = (
  data: PostsQuery | undefined,
  loading: boolean,
  fetchMore: any,
  previousData: PostsQuery | undefined
) => {
  if (process.browser) {
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 100
      ) {
        if (!loading && data) {
          // you're at the bottom of the page
          //
          if (previousData?.posts.length === (data?.posts.length || 0) - 1)
            return false;
          fetchMore({
            variables: {
              take: 10,
              skip: data?.posts.length,
            },
          });
        }
      }
    };
  }
};
