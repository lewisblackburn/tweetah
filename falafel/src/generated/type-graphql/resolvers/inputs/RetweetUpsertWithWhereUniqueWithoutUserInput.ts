import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateWithoutUserInput } from "../inputs/RetweetCreateWithoutUserInput";
import { RetweetUpdateWithoutUserInput } from "../inputs/RetweetUpdateWithoutUserInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RetweetUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => RetweetCreateWithoutUserInput, {
    nullable: false
  })
  create!: RetweetCreateWithoutUserInput;
}
