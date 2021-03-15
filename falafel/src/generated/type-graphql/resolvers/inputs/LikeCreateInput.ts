import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateNestedManyWithoutLikeInput } from "../inputs/LikesOnTweetsCreateNestedManyWithoutLikeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsCreateNestedManyWithoutLikeInput, {
    nullable: true
  })
  tweets?: LikesOnTweetsCreateNestedManyWithoutLikeInput | undefined;
}
