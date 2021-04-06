import * as TypeGraphQL from "type-graphql";

export enum TweetScalarFieldEnum {
  id = "id",
  userId = "userId",
  text = "text",
  commentAmount = "commentAmount",
  likeAmount = "likeAmount",
  retweetAmount = "retweetAmount",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TweetScalarFieldEnum, {
  name: "TweetScalarFieldEnum",
  description: undefined,
});
