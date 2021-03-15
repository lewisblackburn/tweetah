import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsListRelationFilter } from "../inputs/CommentsOnTweetsListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LikesOnTweetsListRelationFilter } from "../inputs/LikesOnTweetsListRelationFilter";
import { RetweetsOnTweetsListRelationFilter } from "../inputs/RetweetsOnTweetsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TweetListRelationFilter } from "../inputs/TweetListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  displayname?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  followedBy?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  following?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleFilter, {
    nullable: true
  })
  role?: EnumUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => TweetListRelationFilter, {
    nullable: true
  })
  tweets?: TweetListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LikesOnTweetsListRelationFilter, {
    nullable: true
  })
  likes?: LikesOnTweetsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsListRelationFilter, {
    nullable: true
  })
  retweets?: RetweetsOnTweetsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentsOnTweetsListRelationFilter, {
    nullable: true
  })
  comments?: CommentsOnTweetsListRelationFilter | undefined;
}
