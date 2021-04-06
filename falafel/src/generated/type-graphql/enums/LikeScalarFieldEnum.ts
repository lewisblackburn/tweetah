import * as TypeGraphQL from "type-graphql";

export enum LikeScalarFieldEnum {
  tweetId = "tweetId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
  name: "LikeScalarFieldEnum",
  description: undefined,
});
