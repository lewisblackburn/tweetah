import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeTweetIdUserIdCompoundUniqueInput } from "../inputs/LikeTweetIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => LikeTweetIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  tweetId_userId?: LikeTweetIdUserIdCompoundUniqueInput | undefined;
}
