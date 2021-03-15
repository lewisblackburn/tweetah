import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsUpdateInput } from "../../../inputs/LikesOnTweetsUpdateInput";
import { LikesOnTweetsWhereUniqueInput } from "../../../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateInput, {
    nullable: false
  })
  data!: LikesOnTweetsUpdateInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnTweetsWhereUniqueInput;
}
