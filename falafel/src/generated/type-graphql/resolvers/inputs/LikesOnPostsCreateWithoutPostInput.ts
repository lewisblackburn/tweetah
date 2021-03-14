import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateNestedOneWithoutPostsInput } from "../inputs/LikeCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikesInput;

  @TypeGraphQL.Field(_type => LikeCreateNestedOneWithoutPostsInput, {
    nullable: true
  })
  like?: LikeCreateNestedOneWithoutPostsInput | undefined;
}
