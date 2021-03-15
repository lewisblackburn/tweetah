import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { RetweetUpdateOneWithoutTweetsInput } from "../inputs/RetweetUpdateOneWithoutTweetsInput";
import { TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput } from "../inputs/TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => RetweetUpdateOneWithoutTweetsInput, {
    nullable: true
  })
  reweet?: RetweetUpdateOneWithoutTweetsInput | undefined;
}
