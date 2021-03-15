import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneWithoutTweetsInput } from "../inputs/CommentUpdateOneWithoutTweetsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TweetUpdateOneRequiredWithoutCommentsInput } from "../inputs/TweetUpdateOneRequiredWithoutCommentsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutTweetsInput, {
    nullable: true
  })
  comment?: CommentUpdateOneWithoutTweetsInput | undefined;
}
