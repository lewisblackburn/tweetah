import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsUpdateInput } from "../../../inputs/RetweetsOnTweetsUpdateInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../../../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateInput, {
    nullable: false
  })
  data!: RetweetsOnTweetsUpdateInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;
}
