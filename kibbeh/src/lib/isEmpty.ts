export const isEmpty = (obj: object) => {
  if (!obj) {
    return true;
  }

  if (!(typeof obj === "number") && !Object.keys(obj).length) {
    return true;
  }
};
