import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateWithoutCommentInput } from "../inputs/CommentsOnTweetsCreateWithoutCommentInput";
import { CommentsOnTweetsUpdateWithoutCommentInput } from "../inputs/CommentsOnTweetsUpdateWithoutCommentInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpsertWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: CommentsOnTweetsUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsCreateWithoutCommentInput, {
    nullable: false
  })
  create!: CommentsOnTweetsCreateWithoutCommentInput;
}
