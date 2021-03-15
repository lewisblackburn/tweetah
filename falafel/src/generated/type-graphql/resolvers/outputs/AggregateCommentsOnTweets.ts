import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsAvgAggregate } from "../outputs/CommentsOnTweetsAvgAggregate";
import { CommentsOnTweetsCountAggregate } from "../outputs/CommentsOnTweetsCountAggregate";
import { CommentsOnTweetsMaxAggregate } from "../outputs/CommentsOnTweetsMaxAggregate";
import { CommentsOnTweetsMinAggregate } from "../outputs/CommentsOnTweetsMinAggregate";
import { CommentsOnTweetsSumAggregate } from "../outputs/CommentsOnTweetsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateCommentsOnTweets {
  @TypeGraphQL.Field(_type => CommentsOnTweetsCountAggregate, {
    nullable: true
  })
  count!: CommentsOnTweetsCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentsOnTweetsAvgAggregate, {
    nullable: true
  })
  avg!: CommentsOnTweetsAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentsOnTweetsSumAggregate, {
    nullable: true
  })
  sum!: CommentsOnTweetsSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentsOnTweetsMinAggregate, {
    nullable: true
  })
  min!: CommentsOnTweetsMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentsOnTweetsMaxAggregate, {
    nullable: true
  })
  max!: CommentsOnTweetsMaxAggregate | null;
}
