import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutUserInput } from "../inputs/CommentCreateOrConnectWithoutUserInput";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
