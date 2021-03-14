import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
