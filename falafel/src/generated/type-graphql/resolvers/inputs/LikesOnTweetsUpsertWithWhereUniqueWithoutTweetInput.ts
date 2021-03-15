import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateWithoutTweetInput } from "../inputs/LikesOnTweetsCreateWithoutTweetInput";
import { LikesOnTweetsUpdateWithoutTweetInput } from "../inputs/LikesOnTweetsUpdateWithoutTweetInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpsertWithWhereUniqueWithoutTweetInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateWithoutTweetInput, {
    nullable: false
  })
  update!: LikesOnTweetsUpdateWithoutTweetInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsCreateWithoutTweetInput, {
    nullable: false
  })
  create!: LikesOnTweetsCreateWithoutTweetInput;
}
