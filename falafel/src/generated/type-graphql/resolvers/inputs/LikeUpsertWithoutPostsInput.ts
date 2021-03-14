import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateWithoutPostsInput } from "../inputs/LikeCreateWithoutPostsInput";
import { LikeUpdateWithoutPostsInput } from "../inputs/LikeUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => LikeUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: LikeUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => LikeCreateWithoutPostsInput, {
    nullable: false
  })
  create!: LikeCreateWithoutPostsInput;
}
