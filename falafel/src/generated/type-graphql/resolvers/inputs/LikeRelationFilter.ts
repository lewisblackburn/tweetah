import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeWhereInput } from "../inputs/LikeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeRelationFilter {
  @TypeGraphQL.Field(_type => LikeWhereInput, {
    nullable: true
  })
  is?: LikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => LikeWhereInput, {
    nullable: true
  })
  isNot?: LikeWhereInput | undefined;
}
