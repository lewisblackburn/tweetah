import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LikesOnPosts } from "../models/LikesOnPosts";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Like {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  posts?: LikesOnPosts[];
}
