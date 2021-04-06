import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetUpdateWithoutTweetInput } from "../inputs/RetweetUpdateWithoutTweetInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateWithWhereUniqueWithoutTweetInput {
  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetUpdateWithoutTweetInput, {
    nullable: false
  })
  data!: RetweetUpdateWithoutTweetInput;
}
