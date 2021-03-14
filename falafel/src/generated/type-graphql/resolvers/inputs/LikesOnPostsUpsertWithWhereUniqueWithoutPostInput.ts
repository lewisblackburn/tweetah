import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateWithoutPostInput } from "../inputs/LikesOnPostsCreateWithoutPostInput";
import { LikesOnPostsUpdateWithoutPostInput } from "../inputs/LikesOnPostsUpdateWithoutPostInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnPostsUpdateWithoutPostInput, {
    nullable: false
  })
  update!: LikesOnPostsUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => LikesOnPostsCreateWithoutPostInput, {
    nullable: false
  })
  create!: LikesOnPostsCreateWithoutPostInput;
}
