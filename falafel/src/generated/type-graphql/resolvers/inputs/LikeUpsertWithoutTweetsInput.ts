import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutTweetsInput } from "../inputs/LikeCreateWithoutTweetsInput";
import { LikeUpdateWithoutTweetsInput } from "../inputs/LikeUpdateWithoutTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpsertWithoutTweetsInput {
  @TypeGraphQL.Field(_type => LikeUpdateWithoutTweetsInput, {
    nullable: false
  })
  update!: LikeUpdateWithoutTweetsInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutTweetsInput, {
    nullable: false
  })
  create!: LikeCreateWithoutTweetsInput;
}
