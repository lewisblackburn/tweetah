import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsUpdateManyWithoutReweetInput } from "../inputs/RetweetsOnTweetsUpdateManyWithoutReweetInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateManyWithoutReweetInput, {
    nullable: true
  })
  tweets?: RetweetsOnTweetsUpdateManyWithoutReweetInput | undefined;
}
