import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnPostsOrderByInput } from "../../../inputs/LikesOnPostsOrderByInput";
import { LikesOnPostsWhereInput } from "../../../inputs/LikesOnPostsWhereInput";
import { LikesOnPostsWhereUniqueInput } from "../../../inputs/LikesOnPostsWhereUniqueInput";
import { LikesOnPostsScalarFieldEnum } from "../../../../enums/LikesOnPostsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PostLikesArgs {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereInput, {
    nullable: true
  })
  where?: LikesOnPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsOrderByInput], {
    nullable: true
  })
  orderBy?: LikesOnPostsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: true
  })
  cursor?: LikesOnPostsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"postId" | "userId" | "createdAt" | "likeId"> | undefined;
}
