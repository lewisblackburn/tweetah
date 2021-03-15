import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsTweetIdUserIdCompoundUniqueInput } from "../inputs/LikesOnTweetsTweetIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsWhereUniqueInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsTweetIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  tweetId_userId?: LikesOnTweetsTweetIdUserIdCompoundUniqueInput | undefined;
}
