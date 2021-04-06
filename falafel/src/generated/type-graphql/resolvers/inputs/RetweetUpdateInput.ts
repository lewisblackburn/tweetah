import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TweetUpdateOneRequiredWithoutRetweetsInput } from "../inputs/TweetUpdateOneRequiredWithoutRetweetsInput";
import { UserUpdateOneRequiredWithoutRetweetsInput } from "../inputs/UserUpdateOneRequiredWithoutRetweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutRetweetsInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutRetweetsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutRetweetsInput | undefined;
}
