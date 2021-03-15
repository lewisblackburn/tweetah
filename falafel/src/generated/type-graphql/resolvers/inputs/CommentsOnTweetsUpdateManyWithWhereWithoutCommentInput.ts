import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsScalarWhereInput } from "../inputs/CommentsOnTweetsScalarWhereInput";
import { CommentsOnTweetsUpdateManyMutationInput } from "../inputs/CommentsOnTweetsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpdateManyWithWhereWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsScalarWhereInput, {
    nullable: false
  })
  where!: CommentsOnTweetsScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentsOnTweetsUpdateManyMutationInput;
}
