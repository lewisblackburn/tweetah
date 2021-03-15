import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetAvgAggregate } from "../outputs/RetweetAvgAggregate";
import { RetweetCountAggregate } from "../outputs/RetweetCountAggregate";
import { RetweetMaxAggregate } from "../outputs/RetweetMaxAggregate";
import { RetweetMinAggregate } from "../outputs/RetweetMinAggregate";
import { RetweetSumAggregate } from "../outputs/RetweetSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateRetweet {
  @TypeGraphQL.Field(_type => RetweetCountAggregate, {
    nullable: true
  })
  count!: RetweetCountAggregate | null;

  @TypeGraphQL.Field(_type => RetweetAvgAggregate, {
    nullable: true
  })
  avg!: RetweetAvgAggregate | null;

  @TypeGraphQL.Field(_type => RetweetSumAggregate, {
    nullable: true
  })
  sum!: RetweetSumAggregate | null;

  @TypeGraphQL.Field(_type => RetweetMinAggregate, {
    nullable: true
  })
  min!: RetweetMinAggregate | null;

  @TypeGraphQL.Field(_type => RetweetMaxAggregate, {
    nullable: true
  })
  max!: RetweetMaxAggregate | null;
}
