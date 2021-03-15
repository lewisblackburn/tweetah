import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateOrConnectWithoutUserInput } from "../inputs/LikesOnTweetsCreateOrConnectWithoutUserInput";
import { LikesOnTweetsCreateWithoutUserInput } from "../inputs/LikesOnTweetsCreateWithoutUserInput";
import { LikesOnTweetsScalarWhereInput } from "../inputs/LikesOnTweetsScalarWhereInput";
import { LikesOnTweetsUpdateManyWithWhereWithoutUserInput } from "../inputs/LikesOnTweetsUpdateManyWithWhereWithoutUserInput";
import { LikesOnTweetsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/LikesOnTweetsUpdateWithWhereUniqueWithoutUserInput";
import { LikesOnTweetsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/LikesOnTweetsUpsertWithWhereUniqueWithoutUserInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateWithoutUserInput], {
    nullable: true
  })
  create?: LikesOnTweetsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnTweetsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: LikesOnTweetsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: LikesOnTweetsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: LikesOnTweetsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LikesOnTweetsScalarWhereInput[] | undefined;
}
