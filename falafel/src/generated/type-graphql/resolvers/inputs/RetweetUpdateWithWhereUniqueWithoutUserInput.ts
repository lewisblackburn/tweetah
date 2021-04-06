import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetUpdateWithoutUserInput } from "../inputs/RetweetUpdateWithoutUserInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetUpdateWithoutUserInput, {
    nullable: false
  })
  data!: RetweetUpdateWithoutUserInput;
}
