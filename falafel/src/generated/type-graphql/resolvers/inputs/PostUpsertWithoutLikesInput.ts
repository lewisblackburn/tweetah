import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLikesInput } from "../inputs/PostCreateWithoutLikesInput";
import { PostUpdateWithoutLikesInput } from "../inputs/PostUpdateWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLikesInput, {
    nullable: false
  })
  create!: PostCreateWithoutLikesInput;
}
