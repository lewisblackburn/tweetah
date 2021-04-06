import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateOrConnectWithoutUserInput } from "../inputs/RetweetCreateOrConnectWithoutUserInput";
import { RetweetCreateWithoutUserInput } from "../inputs/RetweetCreateWithoutUserInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RetweetCreateWithoutUserInput], {
    nullable: true
  })
  create?: RetweetCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RetweetCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetWhereUniqueInput[] | undefined;
}
