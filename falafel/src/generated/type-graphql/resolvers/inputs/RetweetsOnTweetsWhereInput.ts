import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RetweetRelationFilter } from "../inputs/RetweetRelationFilter";
import { TweetRelationFilter } from "../inputs/TweetRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsWhereInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereInput], {
    nullable: true
  })
  AND?: RetweetsOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereInput], {
    nullable: true
  })
  OR?: RetweetsOnTweetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereInput], {
    nullable: true
  })
  NOT?: RetweetsOnTweetsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => RetweetRelationFilter, {
    nullable: true
  })
  reweet?: RetweetRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  retweetId?: IntNullableFilter | undefined;
}
