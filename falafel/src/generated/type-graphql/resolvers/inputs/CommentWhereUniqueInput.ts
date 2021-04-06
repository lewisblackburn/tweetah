import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentTweetIdUserIdCompoundUniqueInput } from "../inputs/CommentTweetIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentWhereUniqueInput {
  @TypeGraphQL.Field(_type => CommentTweetIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  tweetId_userId?: CommentTweetIdUserIdCompoundUniqueInput | undefined;
}
