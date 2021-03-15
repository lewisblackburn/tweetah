import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateWithoutLikeInput } from "../inputs/LikesOnTweetsCreateWithoutLikeInput";
import { LikesOnTweetsUpdateWithoutLikeInput } from "../inputs/LikesOnTweetsUpdateWithoutLikeInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpsertWithWhereUniqueWithoutLikeInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateWithoutLikeInput, {
    nullable: false
  })
  update!: LikesOnTweetsUpdateWithoutLikeInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsCreateWithoutLikeInput, {
    nullable: false
  })
  create!: LikesOnTweetsCreateWithoutLikeInput;
}
