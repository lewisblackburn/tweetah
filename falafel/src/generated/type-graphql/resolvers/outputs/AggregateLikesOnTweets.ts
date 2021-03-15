import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsAvgAggregate } from "../outputs/LikesOnTweetsAvgAggregate";
import { LikesOnTweetsCountAggregate } from "../outputs/LikesOnTweetsCountAggregate";
import { LikesOnTweetsMaxAggregate } from "../outputs/LikesOnTweetsMaxAggregate";
import { LikesOnTweetsMinAggregate } from "../outputs/LikesOnTweetsMinAggregate";
import { LikesOnTweetsSumAggregate } from "../outputs/LikesOnTweetsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateLikesOnTweets {
  @TypeGraphQL.Field(_type => LikesOnTweetsCountAggregate, {
    nullable: true
  })
  count!: LikesOnTweetsCountAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnTweetsAvgAggregate, {
    nullable: true
  })
  avg!: LikesOnTweetsAvgAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnTweetsSumAggregate, {
    nullable: true
  })
  sum!: LikesOnTweetsSumAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnTweetsMinAggregate, {
    nullable: true
  })
  min!: LikesOnTweetsMinAggregate | null;

  @TypeGraphQL.Field(_type => LikesOnTweetsMaxAggregate, {
    nullable: true
  })
  max!: LikesOnTweetsMaxAggregate | null;
}
