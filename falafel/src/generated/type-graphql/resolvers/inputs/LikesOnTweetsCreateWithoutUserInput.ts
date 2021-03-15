import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateNestedOneWithoutTweetsInput } from "../inputs/LikeCreateNestedOneWithoutTweetsInput";
import { TweetCreateNestedOneWithoutLikesOnTweetsInput } from "../inputs/TweetCreateNestedOneWithoutLikesOnTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnTweetsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedOneWithoutLikesOnTweetsInput, {
    nullable: false
  })
  tweet!: TweetCreateNestedOneWithoutLikesOnTweetsInput;

  @TypeGraphQL.Field(_type => LikeCreateNestedOneWithoutTweetsInput, {
    nullable: true
  })
  like?: LikeCreateNestedOneWithoutTweetsInput | undefined;
}
