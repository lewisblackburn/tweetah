import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsUpdateWithoutReweetInput } from "../inputs/RetweetsOnTweetsUpdateWithoutReweetInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateWithWhereUniqueWithoutReweetInput {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateWithoutReweetInput, {
    nullable: false
  })
  data!: RetweetsOnTweetsUpdateWithoutReweetInput;
}
