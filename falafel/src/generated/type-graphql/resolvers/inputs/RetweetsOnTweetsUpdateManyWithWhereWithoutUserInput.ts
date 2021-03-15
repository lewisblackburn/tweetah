import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsScalarWhereInput } from "../inputs/RetweetsOnTweetsScalarWhereInput";
import { RetweetsOnTweetsUpdateManyMutationInput } from "../inputs/RetweetsOnTweetsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsScalarWhereInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsScalarWhereInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RetweetsOnTweetsUpdateManyMutationInput;
}
