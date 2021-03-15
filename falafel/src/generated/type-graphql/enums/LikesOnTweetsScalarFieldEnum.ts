import * as TypeGraphQL from "type-graphql";

export enum LikesOnTweetsScalarFieldEnum {
  tweetId = "tweetId",
  userId = "userId",
  createdAt = "createdAt",
  likeId = "likeId"
}
TypeGraphQL.registerEnumType(LikesOnTweetsScalarFieldEnum, {
  name: "LikesOnTweetsScalarFieldEnum",
  description: undefined,
});
