import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetWhereInput } from "../inputs/TweetWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetRelationFilter {
  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  is?: TweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereInput, {
    nullable: true
  })
  isNot?: TweetWhereInput | undefined;
}
