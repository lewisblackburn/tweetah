import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetUpdateManyMutationInput } from "../../../inputs/RetweetUpdateManyMutationInput";
import { RetweetWhereInput } from "../../../inputs/RetweetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetUpdateManyMutationInput, {
    nullable: false
  })
  data!: RetweetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  where?: RetweetWhereInput | undefined;
}
