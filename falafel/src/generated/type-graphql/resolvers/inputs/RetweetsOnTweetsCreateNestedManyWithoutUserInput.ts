import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateOrConnectWithoutUserInput } from "../inputs/RetweetsOnTweetsCreateOrConnectWithoutUserInput";
import { RetweetsOnTweetsCreateWithoutUserInput } from "../inputs/RetweetsOnTweetsCreateWithoutUserInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateWithoutUserInput], {
    nullable: true
  })
  create?: RetweetsOnTweetsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RetweetsOnTweetsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetsOnTweetsWhereUniqueInput[] | undefined;
}
