import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsWhereUniqueInput } from "../../../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;
}
