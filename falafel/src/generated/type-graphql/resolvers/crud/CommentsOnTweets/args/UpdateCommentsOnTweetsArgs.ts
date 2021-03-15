import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsUpdateInput } from "../../../inputs/CommentsOnTweetsUpdateInput";
import { CommentsOnTweetsWhereUniqueInput } from "../../../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateInput, {
    nullable: false
  })
  data!: CommentsOnTweetsUpdateInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;
}
