import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsCreateInput } from "../../../inputs/RetweetsOnTweetsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsCreateInput, {
    nullable: false
  })
  data!: RetweetsOnTweetsCreateInput;
}
