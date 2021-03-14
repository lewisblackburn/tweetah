import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LikeUpdateOneWithoutPostsInput } from "../inputs/LikeUpdateOneWithoutPostsInput";
import { UserUpdateOneRequiredWithoutLikesInput } from "../inputs/UserUpdateOneRequiredWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpdateWithoutPostInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpdateOneWithoutPostsInput, {
    nullable: true
  })
  like?: LikeUpdateOneWithoutPostsInput | undefined;
}
