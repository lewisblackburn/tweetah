import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateOrConnectWithoutRetweetsOnTweetsInput";
import { TweetCreateWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateWithoutRetweetsOnTweetsInput";
import { TweetUpdateWithoutRetweetsOnTweetsInput } from "../inputs/TweetUpdateWithoutRetweetsOnTweetsInput";
import { TweetUpsertWithoutRetweetsOnTweetsInput } from "../inputs/TweetUpsertWithoutRetweetsOnTweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  create?: TweetCreateWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpsertWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  upsert?: TweetUpsertWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  update?: TweetUpdateWithoutRetweetsOnTweetsInput | undefined;
}
