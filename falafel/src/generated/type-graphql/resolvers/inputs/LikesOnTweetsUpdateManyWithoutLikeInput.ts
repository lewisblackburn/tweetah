import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateOrConnectWithoutLikeInput } from "../inputs/LikesOnTweetsCreateOrConnectWithoutLikeInput";
import { LikesOnTweetsCreateWithoutLikeInput } from "../inputs/LikesOnTweetsCreateWithoutLikeInput";
import { LikesOnTweetsScalarWhereInput } from "../inputs/LikesOnTweetsScalarWhereInput";
import { LikesOnTweetsUpdateManyWithWhereWithoutLikeInput } from "../inputs/LikesOnTweetsUpdateManyWithWhereWithoutLikeInput";
import { LikesOnTweetsUpdateWithWhereUniqueWithoutLikeInput } from "../inputs/LikesOnTweetsUpdateWithWhereUniqueWithoutLikeInput";
import { LikesOnTweetsUpsertWithWhereUniqueWithoutLikeInput } from "../inputs/LikesOnTweetsUpsertWithWhereUniqueWithoutLikeInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpdateManyWithoutLikeInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateWithoutLikeInput], {
    nullable: true
  })
  create?: LikesOnTweetsCreateWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateOrConnectWithoutLikeInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnTweetsCreateOrConnectWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpsertWithWhereUniqueWithoutLikeInput], {
    nullable: true
  })
  upsert?: LikesOnTweetsUpsertWithWhereUniqueWithoutLikeInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpdateWithWhereUniqueWithoutLikeInput], {
    nullable: true
  })
  update?: LikesOnTweetsUpdateWithWhereUniqueWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpdateManyWithWhereWithoutLikeInput], {
    nullable: true
  })
  updateMany?: LikesOnTweetsUpdateManyWithWhereWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikesOnTweetsScalarWhereInput[] | undefined;
}
