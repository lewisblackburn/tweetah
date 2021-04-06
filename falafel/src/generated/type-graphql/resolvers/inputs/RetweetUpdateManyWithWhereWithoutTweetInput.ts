import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetScalarWhereInput } from "../inputs/RetweetScalarWhereInput";
import { RetweetUpdateManyMutationInput } from "../inputs/RetweetUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateManyWithWhereWithoutTweetInput {
  @TypeGraphQL.Field(_type => RetweetScalarWhereInput, {
    nullable: false
  })
  where!: RetweetScalarWhereInput;

  @TypeGraphQL.Field(_type => RetweetUpdateManyMutationInput, {
    nullable: false
  })
  data!: RetweetUpdateManyMutationInput;
}
