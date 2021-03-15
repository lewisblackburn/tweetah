import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsCreateInput } from "../../../inputs/CommentsOnTweetsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsCreateInput, {
    nullable: false
  })
  data!: CommentsOnTweetsCreateInput;
}
