import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutLikesInput } from "../inputs/TweetCreateWithoutLikesInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutLikesInput, {
    nullable: false
  })
  create!: TweetCreateWithoutLikesInput;
}
