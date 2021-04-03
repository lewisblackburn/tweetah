import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserUpdateWithoutLikesInput } from "../inputs/UserUpdateWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikesInput;
}
