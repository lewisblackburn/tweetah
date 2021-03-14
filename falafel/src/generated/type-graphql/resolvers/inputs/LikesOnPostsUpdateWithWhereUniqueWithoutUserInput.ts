import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsUpdateWithoutUserInput } from "../inputs/LikesOnPostsUpdateWithoutUserInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => LikesOnPostsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnPostsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnPostsUpdateWithoutUserInput, {
    nullable: false
  })
  data!: LikesOnPostsUpdateWithoutUserInput;
}
