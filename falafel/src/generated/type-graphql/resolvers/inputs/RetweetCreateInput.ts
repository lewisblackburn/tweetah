import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateNestedManyWithoutReweetInput } from "../inputs/RetweetsOnTweetsCreateNestedManyWithoutReweetInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetCreateInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsCreateNestedManyWithoutReweetInput, {
    nullable: true
  })
  tweets?: RetweetsOnTweetsCreateNestedManyWithoutReweetInput | undefined;
}
