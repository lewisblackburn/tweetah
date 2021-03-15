import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateWithoutTweetInput } from "../inputs/RetweetsOnTweetsCreateWithoutTweetInput";
import { RetweetsOnTweetsUpdateWithoutTweetInput } from "../inputs/RetweetsOnTweetsUpdateWithoutTweetInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpsertWithWhereUniqueWithoutTweetInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateWithoutTweetInput, {
    nullable: false
  })
  update!: RetweetsOnTweetsUpdateWithoutTweetInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsCreateWithoutTweetInput, {
    nullable: false
  })
  create!: RetweetsOnTweetsCreateWithoutTweetInput;
}
