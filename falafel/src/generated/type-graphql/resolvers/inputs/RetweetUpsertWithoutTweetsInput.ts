import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateWithoutTweetsInput } from "../inputs/RetweetCreateWithoutTweetsInput";
import { RetweetUpdateWithoutTweetsInput } from "../inputs/RetweetUpdateWithoutTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpsertWithoutTweetsInput {
  @TypeGraphQL.Field(_type => RetweetUpdateWithoutTweetsInput, {
    nullable: false
  })
  update!: RetweetUpdateWithoutTweetsInput;

  @TypeGraphQL.Field(_type => RetweetCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: RetweetCreateWithoutTweetsInput;
}
