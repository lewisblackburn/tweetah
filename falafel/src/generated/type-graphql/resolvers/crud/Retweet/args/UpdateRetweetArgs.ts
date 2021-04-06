import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetUpdateInput } from "../../../inputs/RetweetUpdateInput";
import { RetweetWhereUniqueInput } from "../../../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetUpdateInput, {
    nullable: false
  })
  data!: RetweetUpdateInput;

  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;
}
