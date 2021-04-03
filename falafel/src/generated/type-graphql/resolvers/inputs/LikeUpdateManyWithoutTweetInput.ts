import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutTweetInput } from "../inputs/LikeCreateOrConnectWithoutTweetInput";
import { LikeCreateWithoutTweetInput } from "../inputs/LikeCreateWithoutTweetInput";
import { LikeScalarWhereInput } from "../inputs/LikeScalarWhereInput";
import { LikeUpdateManyWithWhereWithoutTweetInput } from "../inputs/LikeUpdateManyWithWhereWithoutTweetInput";
import { LikeUpdateWithWhereUniqueWithoutTweetInput } from "../inputs/LikeUpdateWithWhereUniqueWithoutTweetInput";
import { LikeUpsertWithWhereUniqueWithoutTweetInput } from "../inputs/LikeUpsertWithWhereUniqueWithoutTweetInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [LikeCreateWithoutTweetInput], {
    nullable: true
  })
  create?: LikeCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpsertWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  upsert?: LikeUpsertWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  connect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  set?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeWhereUniqueInput], {
    nullable: true
  })
  delete?: LikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  update?: LikeUpdateWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeUpdateManyWithWhereWithoutTweetInput], {
    nullable: true
  })
  updateMany?: LikeUpdateManyWithWhereWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikeScalarWhereInput[] | undefined;
}
