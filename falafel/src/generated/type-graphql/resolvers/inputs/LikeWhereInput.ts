import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TweetRelationFilter } from "../inputs/TweetRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeWhereInput {
  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  AND?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  OR?: LikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereInput], {
    nullable: true
  })
  NOT?: LikeWhereInput[] | undefined;

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
}
