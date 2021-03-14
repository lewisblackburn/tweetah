import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsWhereInput } from "../../../inputs/LikesOnPostsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLikesOnPostsArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereInput, {
    nullable: true
  })
  where?: LikesOnPostsWhereInput | undefined;
}
