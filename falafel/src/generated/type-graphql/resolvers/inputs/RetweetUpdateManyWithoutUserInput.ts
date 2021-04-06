import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateOrConnectWithoutUserInput } from "../inputs/RetweetCreateOrConnectWithoutUserInput";
import { RetweetCreateWithoutUserInput } from "../inputs/RetweetCreateWithoutUserInput";
import { RetweetScalarWhereInput } from "../inputs/RetweetScalarWhereInput";
import { RetweetUpdateManyWithWhereWithoutUserInput } from "../inputs/RetweetUpdateManyWithWhereWithoutUserInput";
import { RetweetUpdateWithWhereUniqueWithoutUserInput } from "../inputs/RetweetUpdateWithWhereUniqueWithoutUserInput";
import { RetweetUpsertWithWhereUniqueWithoutUserInput } from "../inputs/RetweetUpsertWithWhereUniqueWithoutUserInput";
import { RetweetWhereUniqueInput } from "../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [RetweetCreateWithoutUserInput], {
    nullable: true
  })
  create?: RetweetCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: RetweetCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: RetweetUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [RetweetUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: RetweetUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: RetweetUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RetweetScalarWhereInput[] | undefined;
}
