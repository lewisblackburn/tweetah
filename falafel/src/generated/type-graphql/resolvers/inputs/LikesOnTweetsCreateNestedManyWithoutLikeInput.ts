import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikesOnTweetsCreateOrConnectWithoutLikeInput } from "../inputs/LikesOnTweetsCreateOrConnectWithoutLikeInput";
import { LikesOnTweetsCreateWithoutLikeInput } from "../inputs/LikesOnTweetsCreateWithoutLikeInput";
import { LikesOnTweetsWhereUniqueInput } from "../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsCreateNestedManyWithoutLikeInput {
  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateWithoutLikeInput], {
    nullable: true
  })
  create?: LikesOnTweetsCreateWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsCreateOrConnectWithoutLikeInput], {
    nullable: true
  })
  connectOrCreate?: LikesOnTweetsCreateOrConnectWithoutLikeInput[] | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: LikesOnTweetsWhereUniqueInput[] | undefined;
}
