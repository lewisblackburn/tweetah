import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsAvgAggregate } from "../outputs/RetweetsOnTweetsAvgAggregate";
import { RetweetsOnTweetsCountAggregate } from "../outputs/RetweetsOnTweetsCountAggregate";
import { RetweetsOnTweetsMaxAggregate } from "../outputs/RetweetsOnTweetsMaxAggregate";
import { RetweetsOnTweetsMinAggregate } from "../outputs/RetweetsOnTweetsMinAggregate";
import { RetweetsOnTweetsSumAggregate } from "../outputs/RetweetsOnTweetsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRetweetsOnTweets {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsCountAggregate, {
    nullable: true
  })
  count!: RetweetsOnTweetsCountAggregate | null;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsAvgAggregate, {
    nullable: true
  })
  avg!: RetweetsOnTweetsAvgAggregate | null;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsSumAggregate, {
    nullable: true
  })
  sum!: RetweetsOnTweetsSumAggregate | null;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsMinAggregate, {
    nullable: true
  })
  min!: RetweetsOnTweetsMinAggregate | null;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsMaxAggregate, {
    nullable: true
  })
  max!: RetweetsOnTweetsMaxAggregate | null;
}
