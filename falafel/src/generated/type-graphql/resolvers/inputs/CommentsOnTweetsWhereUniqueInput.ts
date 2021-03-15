import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsTweetIdUserIdCompoundUniqueInput } from "../inputs/CommentsOnTweetsTweetIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsWhereUniqueInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsTweetIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  tweetId_userId?: CommentsOnTweetsTweetIdUserIdCompoundUniqueInput | undefined;
}
