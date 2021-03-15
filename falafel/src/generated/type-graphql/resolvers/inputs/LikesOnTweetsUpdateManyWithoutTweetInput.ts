import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateOrConnectWithoutTweetInput } from "../inputs/LikesOnTweetsCreateOrConnectWithoutTweetInput";
import { LikesOnTweetsCreateWithoutTweetInput } from "../inputs/LikesOnTweetsCreateWithoutTweetInput";
import { LikesOnTweetsScalarWhereInput } from "../inputs/LikesOnTweetsScalarWhereInput";
import { LikesOnTweetsUpdateManyWithWhereWithoutTweetInput } from "../inputs/LikesOnTweetsUpdateManyWithWhereWithoutTweetInput";
import { LikesOnTweetsUpdateWithWhereUniqueWithoutTweetInput } from "../inputs/LikesOnTweetsUpdateWithWhereUniqueWithoutTweetInput";
import { LikesOnTweetsUpsertWithWhereUniqueWithoutTweetInput } from "../inputs/LikesOnTweetsUpsertWithWhereUniqueWithoutTweetInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpdateManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateWithoutTweetInput], {
    nullable: true
  })
  create?: LikesOnTweetsCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnTweetsCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpsertWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  upsert?: LikesOnTweetsUpsertWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  set?: LikesOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LikesOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  delete?: LikesOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpdateWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  update?: LikesOnTweetsUpdateWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpdateManyWithWhereWithoutTweetInput], {
    nullable: true
  })
  updateMany?: LikesOnTweetsUpdateManyWithWhereWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikesOnTweetsScalarWhereInput[] | undefined;
}
