import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikesInput } from "../inputs/UserCreateOrConnectWithoutLikesInput";
import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
