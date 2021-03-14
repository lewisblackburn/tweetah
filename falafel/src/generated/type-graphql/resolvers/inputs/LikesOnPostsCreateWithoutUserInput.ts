import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateNestedOneWithoutPostsInput } from "../inputs/LikeCreateNestedOneWithoutPostsInput";
import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutLikesInput;

  @TypeGraphQL.Field(_type => LikeCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  like?: LikeCreateNestedOneWithoutPostsInput | undefined;
}
