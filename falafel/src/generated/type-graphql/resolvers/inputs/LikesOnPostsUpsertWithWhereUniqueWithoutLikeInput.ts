import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateWithoutLikeInput } from "../inputs/LikesOnPostsCreateWithoutLikeInput";
import { LikesOnPostsUpdateWithoutLikeInput } from "../inputs/LikesOnPostsUpdateWithoutLikeInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpsertWithWhereUniqueWithoutLikeInput {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnPostsUpdateWithoutLikeInput, {
    nullable: false
  })
  update!: LikesOnPostsUpdateWithoutLikeInput;

  @TypeGraphQL.Field(_type => LikesOnPostsCreateWithoutLikeInput, {
    nullable: false
  })
  create!: LikesOnPostsCreateWithoutLikeInput;
}
