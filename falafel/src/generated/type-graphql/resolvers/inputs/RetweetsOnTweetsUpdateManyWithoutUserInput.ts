import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateOrConnectWithoutUserInput } from "../inputs/RetweetsOnTweetsCreateOrConnectWithoutUserInput";
import { RetweetsOnTweetsCreateWithoutUserInput } from "../inputs/RetweetsOnTweetsCreateWithoutUserInput";
import { RetweetsOnTweetsScalarWhereInput } from "../inputs/RetweetsOnTweetsScalarWhereInput";
import { RetweetsOnTweetsUpdateManyWithWhereWithoutUserInput } from "../inputs/RetweetsOnTweetsUpdateManyWithWhereWithoutUserInput";
import { RetweetsOnTweetsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RetweetsOnTweetsUpdateWithWhereUniqueWithoutUserInput";
import { RetweetsOnTweetsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RetweetsOnTweetsUpsertWithWhereUniqueWithoutUserInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateWithoutUserInput], {
    nullable: true
  })
  create?: RetweetsOnTweetsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RetweetsOnTweetsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: RetweetsOnTweetsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: RetweetsOnTweetsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: RetweetsOnTweetsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RetweetsOnTweetsScalarWhereInput[] | undefined;
}
