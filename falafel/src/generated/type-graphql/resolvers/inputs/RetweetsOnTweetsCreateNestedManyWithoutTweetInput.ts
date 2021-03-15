import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateOrConnectWithoutTweetInput } from "../inputs/RetweetsOnTweetsCreateOrConnectWithoutTweetInput";
import { RetweetsOnTweetsCreateWithoutTweetInput } from "../inputs/RetweetsOnTweetsCreateWithoutTweetInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsCreateNestedManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateWithoutTweetInput], {
    nullable: true
  })
  create?: RetweetsOnTweetsCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: RetweetsOnTweetsCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetsOnTweetsWhereUniqueInput[] | undefined;
}
