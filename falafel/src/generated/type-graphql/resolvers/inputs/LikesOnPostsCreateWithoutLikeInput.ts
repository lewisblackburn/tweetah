import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsCreateWithoutLikeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutLikesInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikesInput;
}
