import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateOrConnectWithoutRetweetsOnTweetsInput";
import { TweetCreateWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateWithoutRetweetsOnTweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateNestedOneWithoutRetweetsOnTweetsInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  create?: TweetCreateWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;
}
