import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateOrConnectWithoutLikeInput } from "../inputs/LikesOnPostsCreateOrConnectWithoutLikeInput";
import { LikesOnPostsCreateWithoutLikeInput } from "../inputs/LikesOnPostsCreateWithoutLikeInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsCreateNestedManyWithoutLikeInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsCreateWithoutLikeInput], {
    nullable: true
  })
  create?: LikesOnPostsCreateWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsCreateOrConnectWithoutLikeInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnPostsCreateOrConnectWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnPostsWhereUniqueInput[] | undefined;
}
