import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentAvgAggregate } from "../outputs/CommentAvgAggregate";
import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
import { CommentSumAggregate } from "../outputs/CommentSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateComment {
  @TypeGraphQL.Field(_type => CommentCountAggregate, {
    nullable: true
  })
  count!: CommentCountAggregate | null;

  @TypeGraphQL.Field(_type => CommentAvgAggregate, {
    nullable: true
  })
  avg!: CommentAvgAggregate | null;

  @TypeGraphQL.Field(_type => CommentSumAggregate, {
    nullable: true
  })
  sum!: CommentSumAggregate | null;

  @TypeGraphQL.Field(_type => CommentMinAggregate, {
    nullable: true
  })
  min!: CommentMinAggregate | null;

  @TypeGraphQL.Field(_type => CommentMaxAggregate, {
    nullable: true
  })
  max!: CommentMaxAggregate | null;
}
