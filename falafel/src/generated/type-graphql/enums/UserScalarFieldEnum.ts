import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  username = "username",
  displayname = "displayname",
  password = "password",
  role = "role",
  coverPhoto = "coverPhoto",
  avatar = "avatar",
  bio = "bio",
  location = "location",
  website = "website",
  dob = "dob",
  followingAmount = "followingAmount",
  followerAmount = "followerAmount",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
