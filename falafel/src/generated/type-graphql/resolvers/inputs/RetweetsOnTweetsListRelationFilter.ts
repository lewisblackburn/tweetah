import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsWhereInput } from "../inputs/RetweetsOnTweetsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsListRelationFilter {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereInput, {
    nullable: true
  })
  every?: RetweetsOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereInput, {
    nullable: true
  })
  some?: RetweetsOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereInput, {
    nullable: true
  })
  none?: RetweetsOnTweetsWhereInput | undefined;
}
