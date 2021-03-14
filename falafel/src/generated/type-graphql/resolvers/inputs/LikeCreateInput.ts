import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateNestedManyWithoutLikeInput } from "../inputs/LikesOnPostsCreateNestedManyWithoutLikeInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeCreateInput {
  @TypeGraphQL.Field(_type => LikesOnPostsCreateNestedManyWithoutLikeInput, {
    nullable: true
  })
  posts?: LikesOnPostsCreateNestedManyWithoutLikeInput | undefined;
}
