import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutTweetInput } from "../inputs/LikeCreateWithoutTweetInput";
import { LikeUpdateWithoutTweetInput } from "../inputs/LikeUpdateWithoutTweetInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpsertWithWhereUniqueWithoutTweetInput {
  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: false
  })
  where!: LikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutTweetInput, {
    nullable: false
  })
  update!: LikeUpdateWithoutTweetInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutTweetInput, {
    nullable: false
  })
  create!: LikeCreateWithoutTweetInput;
}
