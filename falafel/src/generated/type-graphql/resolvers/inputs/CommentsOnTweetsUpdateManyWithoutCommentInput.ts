import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateOrConnectWithoutCommentInput } from "../inputs/CommentsOnTweetsCreateOrConnectWithoutCommentInput";
import { CommentsOnTweetsCreateWithoutCommentInput } from "../inputs/CommentsOnTweetsCreateWithoutCommentInput";
import { CommentsOnTweetsScalarWhereInput } from "../inputs/CommentsOnTweetsScalarWhereInput";
import { CommentsOnTweetsUpdateManyWithWhereWithoutCommentInput } from "../inputs/CommentsOnTweetsUpdateManyWithWhereWithoutCommentInput";
import { CommentsOnTweetsUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/CommentsOnTweetsUpdateWithWhereUniqueWithoutCommentInput";
import { CommentsOnTweetsUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/CommentsOnTweetsUpsertWithWhereUniqueWithoutCommentInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpdateManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateWithoutCommentInput], {
    nullable: true
  })
  create?: CommentsOnTweetsCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: CommentsOnTweetsCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpsertWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  upsert?: CommentsOnTweetsUpsertWithWhereUniqueWithoutCommentInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpdateWithWhereUniqueWithoutCommentInput], {
    nullable: true
  })
  update?: CommentsOnTweetsUpdateWithWhereUniqueWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsUpdateManyWithWhereWithoutCommentInput], {
    nullable: true
  })
  updateMany?: CommentsOnTweetsUpdateManyWithWhereWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentsOnTweetsScalarWhereInput[] | undefined;
}
