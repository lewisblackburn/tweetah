import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsScalarWhereInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsScalarWhereInput], {
    nullable: true
  })
  AND?: CommentsOnTweetsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsScalarWhereInput], {
    nullable: true
  })
  OR?: CommentsOnTweetsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsScalarWhereInput], {
    nullable: true
  })
  NOT?: CommentsOnTweetsScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  commentId?: IntNullableFilter | undefined;
}
