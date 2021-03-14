import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsPostIdUserIdCompoundUniqueInput } from "../inputs/LikesOnPostsPostIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsWhereUniqueInput {
  @TypeGraphQL.Field(_type => LikesOnPostsPostIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  postId_userId?: LikesOnPostsPostIdUserIdCompoundUniqueInput | undefined;
}
