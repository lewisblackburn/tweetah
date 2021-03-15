import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsUpdateManyMutationInput } from "../../../inputs/RetweetsOnTweetsUpdateManyMutationInput";
import { RetweetsOnTweetsWhereInput } from "../../../inputs/RetweetsOnTweetsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RetweetsOnTweetsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereInput, {
    nullable: true
  })
  where?: RetweetsOnTweetsWhereInput | undefined;
}
