import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikesInput } from "../inputs/UserCreateOrConnectWithoutLikesInput";
import { UserCreateWithoutLikesInput } from "../inputs/UserCreateWithoutLikesInput";
import { UserUpdateWithoutLikesInput } from "../inputs/UserUpdateWithoutLikesInput";
import { UserUpsertWithoutLikesInput } from "../inputs/UserUpsertWithoutLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLikesInput | undefined;
}
