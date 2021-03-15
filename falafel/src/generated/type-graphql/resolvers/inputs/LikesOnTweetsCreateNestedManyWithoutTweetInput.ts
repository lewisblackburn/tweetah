import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateOrConnectWithoutTweetInput } from "../inputs/LikesOnTweetsCreateOrConnectWithoutTweetInput";
import { LikesOnTweetsCreateWithoutTweetInput } from "../inputs/LikesOnTweetsCreateWithoutTweetInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsCreateNestedManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateWithoutTweetInput], {
    nullable: true
  })
  create?: LikesOnTweetsCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnTweetsCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnTweetsWhereUniqueInput[] | undefined;
}
