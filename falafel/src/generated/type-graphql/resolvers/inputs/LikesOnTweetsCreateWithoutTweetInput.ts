import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateNestedOneWithoutTweetsInput } from "../inputs/LikeCreateNestedOneWithoutTweetsInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsCreateWithoutTweetInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikesInput;

  @TypeGraphQL.Field(_type => LikeCreateNestedOneWithoutTweetsInput, {
    nullable: true
  })
  like?: LikeCreateNestedOneWithoutTweetsInput | undefined;
}
