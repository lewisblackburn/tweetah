export const handleRedirect = (router: any) => {
  if (typeof router.query.next === "string") {
    router.push(router.query.next);
  } else {
    // worked
    router.push("/");
  }
};
