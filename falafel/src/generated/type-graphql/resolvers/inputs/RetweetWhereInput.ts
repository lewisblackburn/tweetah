import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RetweetsOnTweetsListRelationFilter } from "../inputs/RetweetsOnTweetsListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetWhereInput {
  @TypeGraphQL.Field(_type => [RetweetWhereInput], {
    nullable: true
  })
  AND?: RetweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereInput], {
    nullable: true
  })
  OR?: RetweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetWhereInput], {
    nullable: true
  })
  NOT?: RetweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsListRelationFilter, {
    nullable: true
  })
  tweets?: RetweetsOnTweetsListRelationFilter | undefined;
}
