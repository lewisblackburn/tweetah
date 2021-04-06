import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetWhereInput } from "../../../inputs/RetweetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  where?: RetweetWhereInput | undefined;
}
