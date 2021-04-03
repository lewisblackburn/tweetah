import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutLikesInput } from "../inputs/TweetCreateOrConnectWithoutLikesInput";
import { TweetCreateWithoutLikesInput } from "../inputs/TweetCreateWithoutLikesInput";
import { TweetUpdateWithoutLikesInput } from "../inputs/TweetUpdateWithoutLikesInput";
import { TweetUpsertWithoutLikesInput } from "../inputs/TweetUpsertWithoutLikesInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpdateOneRequiredWithoutLikesInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutLikesInput, {
    nullable: true
  })
  create?: TweetCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: TweetUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutLikesInput, {
    nullable: true
  })
  update?: TweetUpdateWithoutLikesInput | undefined;
}
