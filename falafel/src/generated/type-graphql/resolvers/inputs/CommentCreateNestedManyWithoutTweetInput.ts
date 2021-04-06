import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutTweetInput } from "../inputs/CommentCreateOrConnectWithoutTweetInput";
import { CommentCreateWithoutTweetInput } from "../inputs/CommentCreateWithoutTweetInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutTweetInput], {
    nullable: true
  })
  create?: CommentCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
