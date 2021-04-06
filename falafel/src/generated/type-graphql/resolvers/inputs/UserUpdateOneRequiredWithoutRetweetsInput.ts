import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRetweetsInput } from "../inputs/UserCreateOrConnectWithoutRetweetsInput";
import { UserCreateWithoutRetweetsInput } from "../inputs/UserCreateWithoutRetweetsInput";
import { UserUpdateWithoutRetweetsInput } from "../inputs/UserUpdateWithoutRetweetsInput";
import { UserUpsertWithoutRetweetsInput } from "../inputs/UserUpsertWithoutRetweetsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutRetweetsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutRetweetsInput, {
    nullable: true
  })
  create?: UserCreateWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRetweetsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutRetweetsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRetweetsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutRetweetsInput | undefined;
}
