import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutLikesOnTweetsInput } from "../inputs/TweetCreateOrConnectWithoutLikesOnTweetsInput";
import { TweetCreateWithoutLikesOnTweetsInput } from "../inputs/TweetCreateWithoutLikesOnTweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateNestedOneWithoutLikesOnTweetsInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutLikesOnTweetsInput, {
    nullable: true
  })
  create?: TweetCreateWithoutLikesOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutLikesOnTweetsInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutLikesOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;
}
