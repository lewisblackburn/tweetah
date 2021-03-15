import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsCreateInput } from "../../../inputs/LikesOnTweetsCreateInput";
import { LikesOnTweetsUpdateInput } from "../../../inputs/LikesOnTweetsUpdateInput";
import { LikesOnTweetsWhereUniqueInput } from "../../../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsCreateInput, {
    nullable: false
  })
  create!: LikesOnTweetsCreateInput;

  @TypeGraphQL.Field(_type => LikesOnTweetsUpdateInput, {
    nullable: false
  })
  update!: LikesOnTweetsUpdateInput;
}
