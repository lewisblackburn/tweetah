import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsCreateInput } from "../../../inputs/LikesOnPostsCreateInput";
import { LikesOnPostsUpdateInput } from "../../../inputs/LikesOnPostsUpdateInput";
import { LikesOnPostsWhereUniqueInput } from "../../../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLikesOnPostsArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnPostsCreateInput, {
    nullable: false
  })
  create!: LikesOnPostsCreateInput;

  @TypeGraphQL.Field(_type => LikesOnPostsUpdateInput, {
    nullable: false
  })
  update!: LikesOnPostsUpdateInput;
}
