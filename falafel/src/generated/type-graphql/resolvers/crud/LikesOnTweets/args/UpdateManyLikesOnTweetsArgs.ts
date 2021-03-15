import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsUpdateManyMutationInput } from "../../../inputs/LikesOnTweetsUpdateManyMutationInput";
import { LikesOnTweetsWhereInput } from "../../../inputs/LikesOnTweetsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: LikesOnTweetsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsWhereInput, {
    nullable: true
  })
  where?: LikesOnTweetsWhereInput | undefined;
}
