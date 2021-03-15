import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateOrConnectWithoutTweetInput } from "../inputs/CommentsOnTweetsCreateOrConnectWithoutTweetInput";
import { CommentsOnTweetsCreateWithoutTweetInput } from "../inputs/CommentsOnTweetsCreateWithoutTweetInput";
import { CommentsOnTweetsScalarWhereInput } from "../inputs/CommentsOnTweetsScalarWhereInput";
import { CommentsOnTweetsUpdateManyWithWhereWithoutTweetInput } from "../inputs/CommentsOnTweetsUpdateManyWithWhereWithoutTweetInput";
import { CommentsOnTweetsUpdateWithWhereUniqueWithoutTweetInput } from "../inputs/CommentsOnTweetsUpdateWithWhereUniqueWithoutTweetInput";
import { CommentsOnTweetsUpsertWithWhereUniqueWithoutTweetInput } from "../inputs/CommentsOnTweetsUpsertWithWhereUniqueWithoutTweetInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpdateManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateWithoutTweetInput], {
    nullable: true
  })
  create?: CommentsOnTweetsCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: CommentsOnTweetsCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpsertWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  upsert?: CommentsOnTweetsUpsertWithWhereUniqueWithoutTweetInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpdateWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  update?: CommentsOnTweetsUpdateWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpdateManyWithWhereWithoutTweetInput], {
    nullable: true
  })
  updateMany?: CommentsOnTweetsUpdateManyWithWhereWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsOnTweetsScalarWhereInput[] | undefined;
}
