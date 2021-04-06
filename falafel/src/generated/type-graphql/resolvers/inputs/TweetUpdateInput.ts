import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutTweetInput } from "../inputs/CommentUpdateManyWithoutTweetInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LikeUpdateManyWithoutTweetInput } from "../inputs/LikeUpdateManyWithoutTweetInput";
import { RetweetUpdateManyWithoutTweetInput } from "../inputs/RetweetUpdateManyWithoutTweetInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTweetsInput } from "../inputs/UserUpdateOneRequiredWithoutTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  commentAmount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  likeAmount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  retweetAmount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTweetsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTweetInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpdateManyWithoutTweetInput, {
    nullable: true
  })
  likes?: LikeUpdateManyWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => RetweetUpdateManyWithoutTweetInput, {
    nullable: true
  })
  retweets?: RetweetUpdateManyWithoutTweetInput | undefined;
}
