import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRetweetsInput } from "../inputs/UserCreateWithoutRetweetsInput";
import { UserUpdateWithoutRetweetsInput } from "../inputs/UserUpdateWithoutRetweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutRetweetsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutRetweetsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRetweetsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutRetweetsInput, {
    nullable: false
  })
  create!: UserCreateWithoutRetweetsInput;
}
