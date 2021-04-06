import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateOrConnectWithoutTweetInput } from "../inputs/RetweetCreateOrConnectWithoutTweetInput";
import { RetweetCreateWithoutTweetInput } from "../inputs/RetweetCreateWithoutTweetInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetCreateNestedManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [RetweetCreateWithoutTweetInput], {
    nullable: true
  })
  create?: RetweetCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: RetweetCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetWhereUniqueInput[] | undefined;
}
