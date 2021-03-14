import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateOrConnectWithoutPostInput } from "../inputs/LikesOnPostsCreateOrConnectWithoutPostInput";
import { LikesOnPostsCreateWithoutPostInput } from "../inputs/LikesOnPostsCreateWithoutPostInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsCreateWithoutPostInput], {
    nullable: true
  })
  create?: LikesOnPostsCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnPostsCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnPostsWhereUniqueInput[] | undefined;
}
