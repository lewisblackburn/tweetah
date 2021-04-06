import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetCreateInput } from "../../../inputs/RetweetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetCreateInput, {
    nullable: false
  })
  data!: RetweetCreateInput;
}
