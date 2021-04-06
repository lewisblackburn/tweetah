import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetOrderByInput } from "../../../inputs/RetweetOrderByInput";
import { RetweetWhereInput } from "../../../inputs/RetweetWhereInput";
import { RetweetWhereUniqueInput } from "../../../inputs/RetweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRetweetArgs {
  @TypeGraphQL.Field(_type => RetweetWhereInput, {
    nullable: true
  })
  where?: RetweetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RetweetOrderByInput], {
    nullable: true
  })
  orderBy?: RetweetOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RetweetWhereUniqueInput, {
    nullable: true
  })
  cursor?: RetweetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
