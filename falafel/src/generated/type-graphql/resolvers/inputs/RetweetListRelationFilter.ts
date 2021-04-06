import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetWhereInput } from "../inputs/RetweetWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetListRelationFilter {
  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  every?: RetweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  some?: RetweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  none?: RetweetWhereInput | undefined;
}
