import * as TypeGraphQL from "type-graphql";

export enum LikeScalarFieldEnum {
  tweetId = "tweetId",
  userId = "userId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(LikeScalarFieldEnum, {
  name: "LikeScalarFieldEnum",
  description: undefined,
});
