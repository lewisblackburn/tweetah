import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LikeRelationFilter } from "../inputs/LikeRelationFilter";
import { TweetRelationFilter } from "../inputs/TweetRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsWhereInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereInput], {
    nullable: true
  })
  AND?: LikesOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereInput], {
    nullable: true
  })
  OR?: LikesOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereInput], {
    nullable: true
  })
  NOT?: LikesOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => TweetRelationFilter, {
    nullable: true
  })
  tweet?: TweetRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tweetId?: IntFilter | undefined;

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
