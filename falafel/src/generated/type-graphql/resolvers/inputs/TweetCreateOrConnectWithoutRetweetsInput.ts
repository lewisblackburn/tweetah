import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutRetweetsInput } from "../inputs/TweetCreateWithoutRetweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateOrConnectWithoutRetweetsInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsInput, {
    nullable: false
  })
  create!: TweetCreateWithoutRetweetsInput;
}
