import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutTweetInput } from "../inputs/CommentCreateOrConnectWithoutTweetInput";
import { CommentCreateWithoutTweetInput } from "../inputs/CommentCreateWithoutTweetInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutTweetInput } from "../inputs/CommentUpdateManyWithWhereWithoutTweetInput";
import { CommentUpdateWithWhereUniqueWithoutTweetInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutTweetInput";
import { CommentUpsertWithWhereUniqueWithoutTweetInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutTweetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutTweetInput], {
    nullable: true
  })
  create?: CommentCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutTweetInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutTweetInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
