import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutTweetsInput } from "../inputs/CommentCreateWithoutTweetsInput";
import { CommentUpdateWithoutTweetsInput } from "../inputs/CommentUpdateWithoutTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithoutTweetsInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutTweetsInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutTweetsInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: CommentCreateWithoutTweetsInput;
}
