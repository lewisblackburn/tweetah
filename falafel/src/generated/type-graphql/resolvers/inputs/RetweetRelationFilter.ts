import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetWhereInput } from "../inputs/RetweetWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetRelationFilter {
  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  is?: RetweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  isNot?: RetweetWhereInput | undefined;
}
