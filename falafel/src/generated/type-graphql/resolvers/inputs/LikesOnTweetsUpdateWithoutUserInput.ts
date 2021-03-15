import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateOneWithoutTweetsInput } from "../inputs/LikeUpdateOneWithoutTweetsInput";
import { TweetUpdateOneRequiredWithoutLikesOnTweetsInput } from "../inputs/TweetUpdateOneRequiredWithoutLikesOnTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutLikesOnTweetsInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutLikesOnTweetsInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpdateOneWithoutTweetsInput, {
    nullable: true
  })
  like?: LikeUpdateOneWithoutTweetsInput | undefined;
}
