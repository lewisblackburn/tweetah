import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutTweetInput } from "../inputs/LikeCreateOrConnectWithoutTweetInput";
import { LikeCreateWithoutTweetInput } from "../inputs/LikeCreateWithoutTweetInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateNestedManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutTweetInput], {
    nullable: true
  })
  create?: LikeCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;
}
