import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnPostsCreateOrConnectWithoutUserInput } from "../inputs/LikesOnPostsCreateOrConnectWithoutUserInput";
import { LikesOnPostsCreateWithoutUserInput } from "../inputs/LikesOnPostsCreateWithoutUserInput";
import { LikesOnPostsWhereUniqueInput } from "../inputs/LikesOnPostsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LikesOnPostsCreateWithoutUserInput], {
    nullable: true
  })
  create?: LikesOnPostsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnPostsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnPostsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnPostsWhereUniqueInput[] | undefined;
}
