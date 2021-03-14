import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsCreateInput } from "../../../inputs/LikesOnPostsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLikesOnPostsArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsCreateInput, {
    nullable: false
  })
  data!: LikesOnPostsCreateInput;
}
