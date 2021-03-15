import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsUpdateManyWithoutTweetInput } from "../inputs/CommentsOnTweetsUpdateManyWithoutTweetInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LikesOnTweetsUpdateManyWithoutTweetInput } from "../inputs/LikesOnTweetsUpdateManyWithoutTweetInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RetweetsOnTweetsUpdateManyWithoutTweetInput } from "../inputs/RetweetsOnTweetsUpdateManyWithoutTweetInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTweetsInput } from "../inputs/UserUpdateOneRequiredWithoutTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  commentAmount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  retweetAmount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  likeAmount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTweetsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateManyWithoutTweetInput, {
    nullable: true
  })
  comments?: CommentsOnTweetsUpdateManyWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateManyWithoutTweetInput, {
    nullable: true
  })
  RetweetsOnTweets?: RetweetsOnTweetsUpdateManyWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateManyWithoutTweetInput, {
    nullable: true
  })
  LikesOnTweets?: LikesOnTweetsUpdateManyWithoutTweetInput | undefined;
}
