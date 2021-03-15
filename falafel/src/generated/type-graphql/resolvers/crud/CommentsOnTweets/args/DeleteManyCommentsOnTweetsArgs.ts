import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsWhereInput } from "../../../inputs/CommentsOnTweetsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereInput, {
    nullable: true
  })
  where?: CommentsOnTweetsWhereInput | undefined;
}
