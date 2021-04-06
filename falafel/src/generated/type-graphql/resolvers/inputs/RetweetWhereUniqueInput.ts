import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetTweetIdUserIdCompoundUniqueInput } from "../inputs/RetweetTweetIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetWhereUniqueInput {
  @TypeGraphQL.Field(_type => RetweetTweetIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  tweetId_userId?: RetweetTweetIdUserIdCompoundUniqueInput | undefined;
}
