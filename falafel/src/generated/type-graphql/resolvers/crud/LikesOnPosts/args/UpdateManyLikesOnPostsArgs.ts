import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsUpdateManyMutationInput } from "../../../inputs/LikesOnPostsUpdateManyMutationInput";
import { LikesOnPostsWhereInput } from "../../../inputs/LikesOnPostsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLikesOnPostsArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LikesOnPostsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LikesOnPostsWhereInput, {
    nullable: true
  })
  where?: LikesOnPostsWhereInput | undefined;
}
