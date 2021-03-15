import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsUpdateWithoutCommentInput } from "../inputs/CommentsOnTweetsUpdateWithoutCommentInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpdateWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateWithoutCommentInput, {
    nullable: false
  })
  data!: CommentsOnTweetsUpdateWithoutCommentInput;
}
