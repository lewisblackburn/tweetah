import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateOrConnectWithoutReweetInput } from "../inputs/RetweetsOnTweetsCreateOrConnectWithoutReweetInput";
import { RetweetsOnTweetsCreateWithoutReweetInput } from "../inputs/RetweetsOnTweetsCreateWithoutReweetInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsCreateNestedManyWithoutReweetInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateWithoutReweetInput], {
    nullable: true
  })
  create?: RetweetsOnTweetsCreateWithoutReweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateOrConnectWithoutReweetInput], {
    nullable: true
  })
  connectOrCreate?: RetweetsOnTweetsCreateOrConnectWithoutReweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetsOnTweetsWhereUniqueInput[] | undefined;
}
