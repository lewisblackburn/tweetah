import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsWhereInput } from "../inputs/CommentsOnTweetsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsListRelationFilter {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereInput, {
    nullable: true
  })
  every?: CommentsOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereInput, {
    nullable: true
  })
  some?: CommentsOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereInput, {
    nullable: true
  })
  none?: CommentsOnTweetsWhereInput | undefined;
}
