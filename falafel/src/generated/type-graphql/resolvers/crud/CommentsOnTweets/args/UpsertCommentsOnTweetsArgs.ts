import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsCreateInput } from "../../../inputs/CommentsOnTweetsCreateInput";
import { CommentsOnTweetsUpdateInput } from "../../../inputs/CommentsOnTweetsUpdateInput";
import { CommentsOnTweetsWhereUniqueInput } from "../../../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsCreateInput, {
    nullable: false
  })
  create!: CommentsOnTweetsCreateInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateInput, {
    nullable: false
  })
  update!: CommentsOnTweetsUpdateInput;
}
