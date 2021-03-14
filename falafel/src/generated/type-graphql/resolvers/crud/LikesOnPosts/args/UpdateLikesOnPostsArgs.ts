import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsUpdateInput } from "../../../inputs/LikesOnPostsUpdateInput";
import { LikesOnPostsWhereUniqueInput } from "../../../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLikesOnPostsArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsUpdateInput, {
    nullable: false
  })
  data!: LikesOnPostsUpdateInput;

  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;
}
