import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateOrConnectWithoutCommentInput } from "../inputs/CommentsOnTweetsCreateOrConnectWithoutCommentInput";
import { CommentsOnTweetsCreateWithoutCommentInput } from "../inputs/CommentsOnTweetsCreateWithoutCommentInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsCreateNestedManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateWithoutCommentInput], {
    nullable: true
  })
  create?: CommentsOnTweetsCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: CommentsOnTweetsCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsOnTweetsWhereUniqueInput[] | undefined;
}
