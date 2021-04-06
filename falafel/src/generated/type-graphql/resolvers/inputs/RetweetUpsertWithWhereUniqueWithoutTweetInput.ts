import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateWithoutTweetInput } from "../inputs/RetweetCreateWithoutTweetInput";
import { RetweetUpdateWithoutTweetInput } from "../inputs/RetweetUpdateWithoutTweetInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpsertWithWhereUniqueWithoutTweetInput {
  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetUpdateWithoutTweetInput, {
    nullable: false
  })
  update!: RetweetUpdateWithoutTweetInput;

  @TypeGraphQL.Field(_type => RetweetCreateWithoutTweetInput, {
    nullable: false
  })
  create!: RetweetCreateWithoutTweetInput;
}
