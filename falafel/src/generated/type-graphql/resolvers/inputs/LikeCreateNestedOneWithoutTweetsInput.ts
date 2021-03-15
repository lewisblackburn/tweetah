import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutTweetsInput } from "../inputs/LikeCreateOrConnectWithoutTweetsInput";
import { LikeCreateWithoutTweetsInput } from "../inputs/LikeCreateWithoutTweetsInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateNestedOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => LikeCreateWithoutTweetsInput, {
    nullable: true
  })
  create?: LikeCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateOrConnectWithoutTweetsInput, {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: true
  })
  connect?: LikeWhereUniqueInput | undefined;
}
