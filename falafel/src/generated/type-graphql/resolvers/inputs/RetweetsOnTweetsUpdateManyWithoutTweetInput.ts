import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateOrConnectWithoutTweetInput } from "../inputs/RetweetsOnTweetsCreateOrConnectWithoutTweetInput";
import { RetweetsOnTweetsCreateWithoutTweetInput } from "../inputs/RetweetsOnTweetsCreateWithoutTweetInput";
import { RetweetsOnTweetsScalarWhereInput } from "../inputs/RetweetsOnTweetsScalarWhereInput";
import { RetweetsOnTweetsUpdateManyWithWhereWithoutTweetInput } from "../inputs/RetweetsOnTweetsUpdateManyWithWhereWithoutTweetInput";
import { RetweetsOnTweetsUpdateWithWhereUniqueWithoutTweetInput } from "../inputs/RetweetsOnTweetsUpdateWithWhereUniqueWithoutTweetInput";
import { RetweetsOnTweetsUpsertWithWhereUniqueWithoutTweetInput } from "../inputs/RetweetsOnTweetsUpsertWithWhereUniqueWithoutTweetInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateWithoutTweetInput], {
    nullable: true
  })
  create?: RetweetsOnTweetsCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: RetweetsOnTweetsCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpsertWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  upsert?: RetweetsOnTweetsUpsertWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  set?: RetweetsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RetweetsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  delete?: RetweetsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpdateWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  update?: RetweetsOnTweetsUpdateWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpdateManyWithWhereWithoutTweetInput], {
    nullable: true
  })
  updateMany?: RetweetsOnTweetsUpdateManyWithWhereWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RetweetsOnTweetsScalarWhereInput[] | undefined;
}
