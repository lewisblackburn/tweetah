import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CommentsOnTweets } from "../models/CommentsOnTweets";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Comment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  tweets?: CommentsOnTweets[];
}
