import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsWhereUniqueInput } from "../../../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteLikesOnPostsArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;
}
