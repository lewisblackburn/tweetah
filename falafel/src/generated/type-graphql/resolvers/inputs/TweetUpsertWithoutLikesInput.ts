import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutLikesInput } from "../inputs/TweetCreateWithoutLikesInput";
import { TweetUpdateWithoutLikesInput } from "../inputs/TweetUpdateWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => TweetUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutLikesInput, {
    nullable: false
  })
  create!: TweetCreateWithoutLikesInput;
}
