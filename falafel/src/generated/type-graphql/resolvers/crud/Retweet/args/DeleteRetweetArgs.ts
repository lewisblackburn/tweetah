import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetWhereUniqueInput } from "../../../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;
}
