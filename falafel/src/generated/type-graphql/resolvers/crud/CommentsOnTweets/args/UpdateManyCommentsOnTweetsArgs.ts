import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsUpdateManyMutationInput } from "../../../inputs/CommentsOnTweetsUpdateManyMutationInput";
import { CommentsOnTweetsWhereInput } from "../../../inputs/CommentsOnTweetsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentsOnTweetsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereInput, {
    nullable: true
  })
  where?: CommentsOnTweetsWhereInput | undefined;
}
