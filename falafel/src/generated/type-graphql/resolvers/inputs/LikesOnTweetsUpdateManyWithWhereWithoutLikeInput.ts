import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsScalarWhereInput } from "../inputs/LikesOnTweetsScalarWhereInput";
import { LikesOnTweetsUpdateManyMutationInput } from "../inputs/LikesOnTweetsUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsUpdateManyWithWhereWithoutLikeInput {
  @TypeGraphQL.Field(_type => LikesOnTweetsScalarWhereInput, {
    nullable: false
  })
  where!: LikesOnTweetsScalarWhereInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LikesOnTweetsUpdateManyMutationInput;
}
