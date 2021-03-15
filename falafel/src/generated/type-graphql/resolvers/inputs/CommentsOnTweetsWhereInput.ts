import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentRelationFilter } from "../inputs/CommentRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { TweetRelationFilter } from "../inputs/TweetRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsWhereInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereInput], {
    nullable: true
  })
  AND?: CommentsOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereInput], {
    nullable: true
  })
  OR?: CommentsOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereInput], {
    nullable: true
  })
  NOT?: CommentsOnTweetsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => CommentRelationFilter, {
    nullable: true
  })
  comment?: CommentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  commentId?: IntNullableFilter | undefined;
}
