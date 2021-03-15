import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateWithoutUserInput } from "../inputs/CommentsOnTweetsCreateWithoutUserInput";
import { CommentsOnTweetsUpdateWithoutUserInput } from "../inputs/CommentsOnTweetsUpdateWithoutUserInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: CommentsOnTweetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CommentsOnTweetsUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CommentsOnTweetsCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommentsOnTweetsCreateWithoutUserInput;
}
