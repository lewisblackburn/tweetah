import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetsOnTweetsCreateOrConnectWithoutReweetInput } from "../inputs/RetweetsOnTweetsCreateOrConnectWithoutReweetInput";
import { RetweetsOnTweetsCreateWithoutReweetInput } from "../inputs/RetweetsOnTweetsCreateWithoutReweetInput";
import { RetweetsOnTweetsScalarWhereInput } from "../inputs/RetweetsOnTweetsScalarWhereInput";
import { RetweetsOnTweetsUpdateManyWithWhereWithoutReweetInput } from "../inputs/RetweetsOnTweetsUpdateManyWithWhereWithoutReweetInput";
import { RetweetsOnTweetsUpdateWithWhereUniqueWithoutReweetInput } from "../inputs/RetweetsOnTweetsUpdateWithWhereUniqueWithoutReweetInput";
import { RetweetsOnTweetsUpsertWithWhereUniqueWithoutReweetInput } from "../inputs/RetweetsOnTweetsUpsertWithWhereUniqueWithoutReweetInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateManyWithoutReweetInput {
  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateWithoutReweetInput], {
    nullable: true
  })
  create?: RetweetsOnTweetsCreateWithoutReweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsCreateOrConnectWithoutReweetInput], {
    nullable: true
  })
  connectOrCreate?: RetweetsOnTweetsCreateOrConnectWithoutReweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpsertWithWhereUniqueWithoutReweetInput], {
    nullable: true
  })
  upsert?: RetweetsOnTweetsUpsertWithWhereUniqueWithoutReweetInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpdateWithWhereUniqueWithoutReweetInput], {
    nullable: true
  })
  update?: RetweetsOnTweetsUpdateWithWhereUniqueWithoutReweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsUpdateManyWithWhereWithoutReweetInput], {
    nullable: true
  })
  updateMany?: RetweetsOnTweetsUpdateManyWithWhereWithoutReweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RetweetsOnTweetsScalarWhereInput[] | undefined;
}
