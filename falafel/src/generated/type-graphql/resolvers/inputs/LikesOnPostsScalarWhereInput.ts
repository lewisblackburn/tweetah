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
export class LikesOnPostsScalarWhereInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsScalarWhereInput], {
    nullable: true
  })
  AND?: LikesOnPostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsScalarWhereInput], {
    nullable: true
  })
  OR?: LikesOnPostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsScalarWhereInput], {
    nullable: true
  })
  NOT?: LikesOnPostsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  postId?: IntFilter | undefined;

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
  likeId?: IntNullableFilter | undefined;
}
