import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutLikesOnTweetsInput } from "../inputs/TweetCreateWithoutLikesOnTweetsInput";
import { TweetUpdateWithoutLikesOnTweetsInput } from "../inputs/TweetUpdateWithoutLikesOnTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpsertWithoutLikesOnTweetsInput {
  @TypeGraphQL.Field(_type => TweetUpdateWithoutLikesOnTweetsInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutLikesOnTweetsInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutLikesOnTweetsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutLikesOnTweetsInput;
}
