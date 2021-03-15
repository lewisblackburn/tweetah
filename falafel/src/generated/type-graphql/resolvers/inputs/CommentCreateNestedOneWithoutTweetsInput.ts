import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutTweetsInput } from "../inputs/CommentCreateOrConnectWithoutTweetsInput";
import { CommentCreateWithoutTweetsInput } from "../inputs/CommentCreateWithoutTweetsInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutTweetsInput, {
    nullable: true
  })
  create?: CommentCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutTweetsInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;
}
