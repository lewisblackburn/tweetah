import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutTweetInput } from "../inputs/CommentCreateNestedManyWithoutTweetInput";
import { LikeCreateNestedManyWithoutTweetInput } from "../inputs/LikeCreateNestedManyWithoutTweetInput";
import { RetweetCreateNestedManyWithoutTweetInput } from "../inputs/RetweetCreateNestedManyWithoutTweetInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commentAmount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likeAmount?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  retweetAmount?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutTweetInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateNestedManyWithoutTweetInput, {
    nullable: true
  })
  likes?: LikeCreateNestedManyWithoutTweetInput | undefined;

  @TypeGraphQL.Field(_type => RetweetCreateNestedManyWithoutTweetInput, {
    nullable: true
  })
  retweets?: RetweetCreateNestedManyWithoutTweetInput | undefined;
}
