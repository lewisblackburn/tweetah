import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsCreateInput } from "../../../inputs/RetweetsOnTweetsCreateInput";
import { RetweetsOnTweetsUpdateInput } from "../../../inputs/RetweetsOnTweetsUpdateInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../../../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsCreateInput, {
    nullable: false
  })
  create!: RetweetsOnTweetsCreateInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateInput, {
    nullable: false
  })
  update!: RetweetsOnTweetsUpdateInput;
}
