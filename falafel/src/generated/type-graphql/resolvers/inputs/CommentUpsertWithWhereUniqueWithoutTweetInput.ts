import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutTweetInput } from "../inputs/CommentCreateWithoutTweetInput";
import { CommentUpdateWithoutTweetInput } from "../inputs/CommentUpdateWithoutTweetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutTweetInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutTweetInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutTweetInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutTweetInput, {
    nullable: false
  })
  create!: CommentCreateWithoutTweetInput;
}
