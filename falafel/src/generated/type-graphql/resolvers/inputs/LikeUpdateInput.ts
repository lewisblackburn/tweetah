import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsUpdateManyWithoutLikeInput } from "../inputs/LikesOnPostsUpdateManyWithoutLikeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateInput {
  @TypeGraphQL.Field(_type => LikesOnPostsUpdateManyWithoutLikeInput, {
    nullable: true
  })
  posts?: LikesOnPostsUpdateManyWithoutLikeInput | undefined;
}
