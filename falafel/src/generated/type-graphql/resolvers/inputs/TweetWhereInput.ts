import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsListRelationFilter } from "../inputs/CommentsOnTweetsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LikesOnTweetsListRelationFilter } from "../inputs/LikesOnTweetsListRelationFilter";
import { RetweetsOnTweetsListRelationFilter } from "../inputs/RetweetsOnTweetsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetWhereInput {
  @TypeGraphQL.Field(_type => [TweetWhereInput], {
    nullable: true
  })
  AND?: TweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereInput], {
    nullable: true
  })
  OR?: TweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereInput], {
    nullable: true
  })
  NOT?: TweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  text?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  authorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  author?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  commentAmount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  retweetAmount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  likeAmount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsOnTweetsListRelationFilter, {
    nullable: true
  })
  comments?: CommentsOnTweetsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsListRelationFilter, {
    nullable: true
  })
  RetweetsOnTweets?: RetweetsOnTweetsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LikesOnTweetsListRelationFilter, {
    nullable: true
  })
  LikesOnTweets?: LikesOnTweetsListRelationFilter | undefined;
}
