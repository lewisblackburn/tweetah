import * as TypeGraphQL from "type-graphql";

export enum RetweetScalarFieldEnum {
  tweetId = "tweetId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(RetweetScalarFieldEnum, {
  name: "RetweetScalarFieldEnum",
  description: undefined,
});
