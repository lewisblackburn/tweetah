import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsWhereUniqueInput } from "../../../inputs/RetweetsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetsOnTweetsWhereUniqueInput;
}
