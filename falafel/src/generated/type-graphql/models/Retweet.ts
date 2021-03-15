import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { RetweetsOnTweets } from "../models/RetweetsOnTweets";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Retweet {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  tweets?: RetweetsOnTweets[];
}
