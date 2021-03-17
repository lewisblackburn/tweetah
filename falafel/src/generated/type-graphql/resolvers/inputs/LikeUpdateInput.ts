import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TweetUpdateOneRequiredWithoutLikesInput } from "../inputs/TweetUpdateOneRequiredWithoutLikesInput";
import { UserUpdateOneRequiredWithoutLikesInput } from "../inputs/UserUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikesInput | undefined;
}
