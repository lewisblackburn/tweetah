import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsWhereInput } from "../inputs/LikesOnPostsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsListRelationFilter {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereInput, {
    nullable: true
  })
  every?: LikesOnPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LikesOnPostsWhereInput, {
    nullable: true
  })
  some?: LikesOnPostsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LikesOnPostsWhereInput, {
    nullable: true
  })
  none?: LikesOnPostsWhereInput | undefined;
}
