import { TweetsQuery } from "../../generated/graphql";

export const useFetchMoreTweets = (
  data: TweetsQuery | undefined,
  loading: boolean,
  fetchMore: any,
  previousData: TweetsQuery | undefined
) => {
  if (process.browser) {
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 0 // when to refetch relative to bottom of page
      ) {
        if (!loading && data) {
          // you're at the bottom of the page
          if (previousData?.tweets.length !== (data?.tweets.length || 0) - 1) {
            fetchMore({
              variables: {
                take: 10,
                offset: data?.tweets.length,
              },
            });
          }
        }
      }
    };
  }
};
