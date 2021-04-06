import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TweetUpdateOneRequiredWithoutCommentsInput } from "../inputs/TweetUpdateOneRequiredWithoutCommentsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TweetUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  tweet?: TweetUpdateOneRequiredWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
}
