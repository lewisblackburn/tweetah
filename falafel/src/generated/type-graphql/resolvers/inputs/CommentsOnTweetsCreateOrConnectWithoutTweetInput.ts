import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateWithoutTweetInput } from "../inputs/CommentsOnTweetsCreateWithoutTweetInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsCreateOrConnectWithoutTweetInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsCreateWithoutTweetInput, {
    nullable: false
  })
  create!: CommentsOnTweetsCreateWithoutTweetInput;
}
