import * as TypeGraphQL from "type-graphql";

export enum TweetScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  text = "text",
  image = "image",
  authorId = "authorId",
  commentAmount = "commentAmount",
  retweetAmount = "retweetAmount",
  likeAmount = "likeAmount"
}
TypeGraphQL.registerEnumType(TweetScalarFieldEnum, {
  name: "TweetScalarFieldEnum",
  description: undefined,
});
