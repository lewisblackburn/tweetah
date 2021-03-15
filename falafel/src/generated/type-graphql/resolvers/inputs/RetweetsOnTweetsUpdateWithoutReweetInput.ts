import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput } from "../inputs/TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput";
import { UserUpdateOneRequiredWithoutRetweetsInput } from "../inputs/UserUpdateOneRequiredWithoutRetweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsUpdateWithoutReweetInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutRetweetsOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRetweetsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutRetweetsInput | undefined;
}
