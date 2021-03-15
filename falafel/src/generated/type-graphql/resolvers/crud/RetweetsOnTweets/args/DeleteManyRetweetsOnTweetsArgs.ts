import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsWhereInput } from "../../../inputs/RetweetsOnTweetsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereInput, {
    nullable: true
  })
  where?: RetweetsOnTweetsWhereInput | undefined;
}
