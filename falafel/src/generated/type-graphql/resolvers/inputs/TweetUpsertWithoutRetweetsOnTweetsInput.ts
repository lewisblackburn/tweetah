import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateWithoutRetweetsOnTweetsInput";
import { TweetUpdateWithoutRetweetsOnTweetsInput } from "../inputs/TweetUpdateWithoutRetweetsOnTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpsertWithoutRetweetsOnTweetsInput {
  @TypeGraphQL.Field(_type => TweetUpdateWithoutRetweetsOnTweetsInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutRetweetsOnTweetsInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsOnTweetsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutRetweetsOnTweetsInput;
}
