import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateOrConnectWithoutUserInput } from "../inputs/CommentsOnTweetsCreateOrConnectWithoutUserInput";
import { CommentsOnTweetsCreateWithoutUserInput } from "../inputs/CommentsOnTweetsCreateWithoutUserInput";
import { CommentsOnTweetsScalarWhereInput } from "../inputs/CommentsOnTweetsScalarWhereInput";
import { CommentsOnTweetsUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentsOnTweetsUpdateManyWithWhereWithoutUserInput";
import { CommentsOnTweetsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentsOnTweetsUpdateWithWhereUniqueWithoutUserInput";
import { CommentsOnTweetsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentsOnTweetsUpsertWithWhereUniqueWithoutUserInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentsOnTweetsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentsOnTweetsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: CommentsOnTweetsUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  set?: CommentsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentsOnTweetsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: CommentsOnTweetsUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: CommentsOnTweetsUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsOnTweetsScalarWhereInput[] | undefined;
}
