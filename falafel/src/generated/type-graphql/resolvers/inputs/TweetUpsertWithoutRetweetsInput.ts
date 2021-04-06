import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutRetweetsInput } from "../inputs/TweetCreateWithoutRetweetsInput";
import { TweetUpdateWithoutRetweetsInput } from "../inputs/TweetUpdateWithoutRetweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpsertWithoutRetweetsInput {
  @TypeGraphQL.Field(_type => TweetUpdateWithoutRetweetsInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutRetweetsInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutRetweetsInput;
}
