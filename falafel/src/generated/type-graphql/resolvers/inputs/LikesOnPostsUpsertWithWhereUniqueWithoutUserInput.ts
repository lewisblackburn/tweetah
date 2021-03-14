import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateWithoutUserInput } from "../inputs/LikesOnPostsCreateWithoutUserInput";
import { LikesOnPostsUpdateWithoutUserInput } from "../inputs/LikesOnPostsUpdateWithoutUserInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnPostsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: LikesOnPostsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => LikesOnPostsCreateWithoutUserInput, {
    nullable: false
  })
  create!: LikesOnPostsCreateWithoutUserInput;
}
