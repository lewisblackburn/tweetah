import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateWithoutRetweetsOnTweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateOrConnectWithoutRetweetsOnTweetsInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsOnTweetsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutRetweetsOnTweetsInput;
}
