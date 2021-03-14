import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LikeRelationFilter } from "../inputs/LikeRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsWhereInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsWhereInput], {
    nullable: true
  })
  AND?: LikesOnPostsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereInput], {
    nullable: true
  })
  OR?: LikesOnPostsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereInput], {
    nullable: true
  })
  NOT?: LikesOnPostsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => LikeRelationFilter, {
    nullable: true
  })
  like?: LikeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  likeId?: IntNullableFilter | undefined;
}
