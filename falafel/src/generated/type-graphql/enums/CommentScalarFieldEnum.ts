import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  text = "text",
  tweetId = "tweetId",
  userId = "userId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
