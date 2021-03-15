import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateWithoutUserInput } from "../inputs/RetweetsOnTweetsCreateWithoutUserInput";
import { RetweetsOnTweetsUpdateWithoutUserInput } from "../inputs/RetweetsOnTweetsUpdateWithoutUserInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RetweetsOnTweetsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsCreateWithoutUserInput, {
    nullable: false
  })
  create!: RetweetsOnTweetsCreateWithoutUserInput;
}
