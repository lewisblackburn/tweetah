import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateNestedOneWithoutLikesOnTweetsInput } from "../inputs/TweetCreateNestedOneWithoutLikesOnTweetsInput";
import { UserCreateNestedOneWithoutLikesInput } from "../inputs/UserCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsCreateWithoutLikeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedOneWithoutLikesOnTweetsInput, {
    nullable: false
  })
  tweet!: TweetCreateNestedOneWithoutLikesOnTweetsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutLikesInput;
}
