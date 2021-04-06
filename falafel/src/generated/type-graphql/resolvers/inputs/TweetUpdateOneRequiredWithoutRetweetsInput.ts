import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutRetweetsInput } from "../inputs/TweetCreateOrConnectWithoutRetweetsInput";
import { TweetCreateWithoutRetweetsInput } from "../inputs/TweetCreateWithoutRetweetsInput";
import { TweetUpdateWithoutRetweetsInput } from "../inputs/TweetUpdateWithoutRetweetsInput";
import { TweetUpsertWithoutRetweetsInput } from "../inputs/TweetUpsertWithoutRetweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpdateOneRequiredWithoutRetweetsInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsInput, {
    nullable: true
  })
  create?: TweetCreateWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutRetweetsInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpsertWithoutRetweetsInput, {
    nullable: true
  })
  upsert?: TweetUpsertWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutRetweetsInput, {
    nullable: true
  })
  update?: TweetUpdateWithoutRetweetsInput | undefined;
}
