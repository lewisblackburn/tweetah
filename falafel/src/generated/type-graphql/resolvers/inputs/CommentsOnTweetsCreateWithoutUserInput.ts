import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutTweetsInput } from "../inputs/CommentCreateNestedOneWithoutTweetsInput";
import { TweetCreateNestedOneWithoutCommentsInput } from "../inputs/TweetCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  tweet!: TweetCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutTweetsInput, {
    nullable: true
  })
  comment?: CommentCreateNestedOneWithoutTweetsInput | undefined;
}
