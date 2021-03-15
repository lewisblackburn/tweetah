import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateOrConnectWithoutTweetsInput } from "../inputs/RetweetCreateOrConnectWithoutTweetsInput";
import { RetweetCreateWithoutTweetsInput } from "../inputs/RetweetCreateWithoutTweetsInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetCreateNestedOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => RetweetCreateWithoutTweetsInput, {
    nullable: true
  })
  create?: RetweetCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => RetweetCreateOrConnectWithoutTweetsInput, {
    nullable: true
  })
  connectOrCreate?: RetweetCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: true
  })
  connect?: RetweetWhereUniqueInput | undefined;
}
