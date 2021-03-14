import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";

export const useVerifyLoggedIn = () => {
  const { replace, pathname } = useRouter();
  const { data, loading } = useMeQuery();
  const hasUser = !!(!loading && data?.me);

  useEffect(() => {
    // if (!hasUser) {
    if (hasUser) {
      replace(`/?next=${pathname}`);
    }
  }, [hasUser, pathname, replace]);

  // return hasUser;
  return true;
};
