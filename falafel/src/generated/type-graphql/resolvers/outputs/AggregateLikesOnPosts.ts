import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsAvgAggregate } from "../outputs/LikesOnPostsAvgAggregate";
import { LikesOnPostsCountAggregate } from "../outputs/LikesOnPostsCountAggregate";
import { LikesOnPostsMaxAggregate } from "../outputs/LikesOnPostsMaxAggregate";
import { LikesOnPostsMinAggregate } from "../outputs/LikesOnPostsMinAggregate";
import { LikesOnPostsSumAggregate } from "../outputs/LikesOnPostsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateLikesOnPosts {
  @TypeGraphQL.Field(_type => LikesOnPostsCountAggregate, {
    nullable: true
  })
  count!: LikesOnPostsCountAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnPostsAvgAggregate, {
    nullable: true
  })
  avg!: LikesOnPostsAvgAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnPostsSumAggregate, {
    nullable: true
  })
  sum!: LikesOnPostsSumAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnPostsMinAggregate, {
    nullable: true
  })
  min!: LikesOnPostsMinAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnPostsMaxAggregate, {
    nullable: true
  })
  max!: LikesOnPostsMaxAggregate | null;
}
