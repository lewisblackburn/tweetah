import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateOrConnectWithoutTweetInput } from "../inputs/RetweetCreateOrConnectWithoutTweetInput";
import { RetweetCreateWithoutTweetInput } from "../inputs/RetweetCreateWithoutTweetInput";
import { RetweetScalarWhereInput } from "../inputs/RetweetScalarWhereInput";
import { RetweetUpdateManyWithWhereWithoutTweetInput } from "../inputs/RetweetUpdateManyWithWhereWithoutTweetInput";
import { RetweetUpdateWithWhereUniqueWithoutTweetInput } from "../inputs/RetweetUpdateWithWhereUniqueWithoutTweetInput";
import { RetweetUpsertWithWhereUniqueWithoutTweetInput } from "../inputs/RetweetUpsertWithWhereUniqueWithoutTweetInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [RetweetCreateWithoutTweetInput], {
    nullable: true
  })
  create?: RetweetCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: RetweetCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetUpsertWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  upsert?: RetweetUpsertWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereUniqueInput], {
    nullable: true
  })
  connect?: RetweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereUniqueInput], {
    nullable: true
  })
  set?: RetweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RetweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereUniqueInput], {
    nullable: true
  })
  delete?: RetweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetUpdateWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  update?: RetweetUpdateWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetUpdateManyWithWhereWithoutTweetInput], {
    nullable: true
  })
  updateMany?: RetweetUpdateManyWithWhereWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RetweetScalarWhereInput[] | undefined;
}
