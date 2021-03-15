import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateOrConnectWithoutUserInput } from "../inputs/LikesOnTweetsCreateOrConnectWithoutUserInput";
import { LikesOnTweetsCreateWithoutUserInput } from "../inputs/LikesOnTweetsCreateWithoutUserInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateWithoutUserInput], {
    nullable: true
  })
  create?: LikesOnTweetsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnTweetsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnTweetsWhereUniqueInput[] | undefined;
}
