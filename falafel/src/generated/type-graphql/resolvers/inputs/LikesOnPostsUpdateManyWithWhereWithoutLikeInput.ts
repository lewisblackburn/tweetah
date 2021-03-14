import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsScalarWhereInput } from "../inputs/LikesOnPostsScalarWhereInput";
import { LikesOnPostsUpdateManyMutationInput } from "../inputs/LikesOnPostsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsUpdateManyWithWhereWithoutLikeInput {
  @TypeGraphQL.Field(_type => LikesOnPostsScalarWhereInput, {
    nullable: false
  })
  where!: LikesOnPostsScalarWhereInput;

  @TypeGraphQL.Field(_type => LikesOnPostsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LikesOnPostsUpdateManyMutationInput;
}
