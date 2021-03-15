import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateWithoutUserInput } from "../inputs/LikesOnTweetsCreateWithoutUserInput";
import { LikesOnTweetsUpdateWithoutUserInput } from "../inputs/LikesOnTweetsUpdateWithoutUserInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: LikesOnTweetsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsCreateWithoutUserInput, {
    nullable: false
  })
  create!: LikesOnTweetsCreateWithoutUserInput;
}
