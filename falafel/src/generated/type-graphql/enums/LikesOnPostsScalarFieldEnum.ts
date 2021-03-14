import * as TypeGraphQL from "type-graphql";

export enum LikesOnPostsScalarFieldEnum {
  postId = "postId",
  userId = "userId",
  createdAt = "createdAt",
  likeId = "likeId"
}
TypeGraphQL.registerEnumType(LikesOnPostsScalarFieldEnum, {
  name: "LikesOnPostsScalarFieldEnum",
  description: undefined,
});
