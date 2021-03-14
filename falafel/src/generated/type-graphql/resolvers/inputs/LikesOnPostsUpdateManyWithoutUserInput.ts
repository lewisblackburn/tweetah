import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateOrConnectWithoutUserInput } from "../inputs/LikesOnPostsCreateOrConnectWithoutUserInput";
import { LikesOnPostsCreateWithoutUserInput } from "../inputs/LikesOnPostsCreateWithoutUserInput";
import { LikesOnPostsScalarWhereInput } from "../inputs/LikesOnPostsScalarWhereInput";
import { LikesOnPostsUpdateManyWithWhereWithoutUserInput } from "../inputs/LikesOnPostsUpdateManyWithWhereWithoutUserInput";
import { LikesOnPostsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LikesOnPostsUpdateWithWhereUniqueWithoutUserInput";
import { LikesOnPostsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LikesOnPostsUpsertWithWhereUniqueWithoutUserInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsCreateWithoutUserInput], {
    nullable: true
  })
  create?: LikesOnPostsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnPostsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: LikesOnPostsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LikesOnPostsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: LikesOnPostsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: LikesOnPostsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikesOnPostsScalarWhereInput[] | undefined;
}
