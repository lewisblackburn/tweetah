import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateNestedManyWithoutPostInput } from "../inputs/LikesOnPostsCreateNestedManyWithoutPostInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likeAmount?: number | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => LikesOnPostsCreateNestedManyWithoutPostInput, {
    nullable: true
  })
  likes?: LikesOnPostsCreateNestedManyWithoutPostInput | undefined;
}
