import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsWhereInput } from "../inputs/LikesOnTweetsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsListRelationFilter {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereInput, {
    nullable: true
  })
  every?: LikesOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LikesOnTweetsWhereInput, {
    nullable: true
  })
  some?: LikesOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => LikesOnTweetsWhereInput, {
    nullable: true
  })
  none?: LikesOnTweetsWhereInput | undefined;
}
