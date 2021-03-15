import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateWithoutUserInput } from "../inputs/RetweetsOnTweetsCreateWithoutUserInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsCreateWithoutUserInput, {
    nullable: false
  })
  create!: RetweetsOnTweetsCreateWithoutUserInput;
}
