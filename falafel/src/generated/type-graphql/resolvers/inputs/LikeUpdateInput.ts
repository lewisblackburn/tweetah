import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsUpdateManyWithoutLikeInput } from "../inputs/LikesOnTweetsUpdateManyWithoutLikeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateManyWithoutLikeInput, {
    nullable: true
  })
  tweets?: LikesOnTweetsUpdateManyWithoutLikeInput | undefined;
}
