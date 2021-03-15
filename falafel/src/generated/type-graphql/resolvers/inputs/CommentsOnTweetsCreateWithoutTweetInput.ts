import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedOneWithoutTweetsInput } from "../inputs/CommentCreateNestedOneWithoutTweetsInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsCreateWithoutTweetInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => CommentCreateNestedOneWithoutTweetsInput, {
    nullable: true
  })
  comment?: CommentCreateNestedOneWithoutTweetsInput | undefined;
}
