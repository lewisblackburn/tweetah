import { useMeQuery } from "../../generated/graphql";

export const isAuth = () => {
  const { data, loading } = useMeQuery();
  const user = !!(!loading && data?.me);
  return user;
};
