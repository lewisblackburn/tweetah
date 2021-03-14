import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateOrConnectWithoutLikeInput } from "../inputs/LikesOnPostsCreateOrConnectWithoutLikeInput";
import { LikesOnPostsCreateWithoutLikeInput } from "../inputs/LikesOnPostsCreateWithoutLikeInput";
import { LikesOnPostsScalarWhereInput } from "../inputs/LikesOnPostsScalarWhereInput";
import { LikesOnPostsUpdateManyWithWhereWithoutLikeInput } from "../inputs/LikesOnPostsUpdateManyWithWhereWithoutLikeInput";
import { LikesOnPostsUpdateWithWhereUniqueWithoutLikeInput } from "../inputs/LikesOnPostsUpdateWithWhereUniqueWithoutLikeInput";
import { LikesOnPostsUpsertWithWhereUniqueWithoutLikeInput } from "../inputs/LikesOnPostsUpsertWithWhereUniqueWithoutLikeInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpdateManyWithoutLikeInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsCreateWithoutLikeInput], {
    nullable: true
  })
  create?: LikesOnPostsCreateWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsCreateOrConnectWithoutLikeInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnPostsCreateOrConnectWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpsertWithWhereUniqueWithoutLikeInput], {
    nullable: true
  })
  upsert?: LikesOnPostsUpsertWithWhereUniqueWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  set?: LikesOnPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LikesOnPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  delete?: LikesOnPostsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpdateWithWhereUniqueWithoutLikeInput], {
    nullable: true
  })
  update?: LikesOnPostsUpdateWithWhereUniqueWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpdateManyWithWhereWithoutLikeInput], {
    nullable: true
  })
  updateMany?: LikesOnPostsUpdateManyWithWhereWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikesOnPostsScalarWhereInput[] | undefined;
}
