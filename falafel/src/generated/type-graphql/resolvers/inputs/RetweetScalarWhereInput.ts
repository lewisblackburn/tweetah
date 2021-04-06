import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetScalarWhereInput {
  @TypeGraphQL.Field(_type => [RetweetScalarWhereInput], {
    nullable: true
  })
  AND?: RetweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetScalarWhereInput], {
    nullable: true
  })
  OR?: RetweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RetweetScalarWhereInput], {
    nullable: true
  })
  NOT?: RetweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tweetId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
