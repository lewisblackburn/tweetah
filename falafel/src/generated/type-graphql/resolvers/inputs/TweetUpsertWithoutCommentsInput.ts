import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutCommentsInput } from "../inputs/TweetCreateWithoutCommentsInput";
import { TweetUpdateWithoutCommentsInput } from "../inputs/TweetUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TweetUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutCommentsInput;
}
