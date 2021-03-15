import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsUpdateManyWithoutCommentInput } from "../inputs/CommentsOnTweetsUpdateManyWithoutCommentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateManyWithoutCommentInput, {
    nullable: true
  })
  tweets?: CommentsOnTweetsUpdateManyWithoutCommentInput | undefined;
}
