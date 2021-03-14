import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateOrConnectWithoutPostInput } from "../inputs/LikesOnPostsCreateOrConnectWithoutPostInput";
import { LikesOnPostsCreateWithoutPostInput } from "../inputs/LikesOnPostsCreateWithoutPostInput";
import { LikesOnPostsScalarWhereInput } from "../inputs/LikesOnPostsScalarWhereInput";
import { LikesOnPostsUpdateManyWithWhereWithoutPostInput } from "../inputs/LikesOnPostsUpdateManyWithWhereWithoutPostInput";
import { LikesOnPostsUpdateWithWhereUniqueWithoutPostInput } from "../inputs/LikesOnPostsUpdateWithWhereUniqueWithoutPostInput";
import { LikesOnPostsUpsertWithWhereUniqueWithoutPostInput } from "../inputs/LikesOnPostsUpsertWithWhereUniqueWithoutPostInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpdateManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsCreateWithoutPostInput], {
    nullable: true
  })
  create?: LikesOnPostsCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnPostsCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: LikesOnPostsUpsertWithWhereUniqueWithoutPostInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LikesOnPostsUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: LikesOnPostsUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: LikesOnPostsUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikesOnPostsScalarWhereInput[] | undefined;
}
