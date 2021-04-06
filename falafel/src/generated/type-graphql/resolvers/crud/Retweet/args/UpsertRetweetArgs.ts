import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetCreateInput } from "../../../inputs/RetweetCreateInput";
import { RetweetUpdateInput } from "../../../inputs/RetweetUpdateInput";
import { RetweetWhereUniqueInput } from "../../../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: false
  })
  where!: RetweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => RetweetCreateInput, {
    nullable: false
  })
  create!: RetweetCreateInput;

  @TypeGraphQL.Field(_type => RetweetUpdateInput, {
    nullable: false
  })
  update!: RetweetUpdateInput;
}
