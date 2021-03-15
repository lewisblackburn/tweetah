import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateOrConnectWithoutTweetInput } from "../inputs/CommentsOnTweetsCreateOrConnectWithoutTweetInput";
import { CommentsOnTweetsCreateWithoutTweetInput } from "../inputs/CommentsOnTweetsCreateWithoutTweetInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsCreateNestedManyWithoutTweetInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateWithoutTweetInput], {
    nullable: true
  })
  create?: CommentsOnTweetsCreateWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateOrConnectWithoutTweetInput], {
    nullable: true
  })
  connectOrCreate?: CommentsOnTweetsCreateOrConnectWithoutTweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsOnTweetsWhereUniqueInput[] | undefined;
}
