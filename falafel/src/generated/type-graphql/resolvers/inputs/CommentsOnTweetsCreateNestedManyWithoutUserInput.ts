import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentsOnTweetsCreateOrConnectWithoutUserInput } from "../inputs/CommentsOnTweetsCreateOrConnectWithoutUserInput";
import { CommentsOnTweetsCreateWithoutUserInput } from "../inputs/CommentsOnTweetsCreateWithoutUserInput";
import { CommentsOnTweetsWhereUniqueInput } from "../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentsOnTweetsCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateWithoutUserInput], {
    nullable: true
  })
  create?: CommentsOnTweetsCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: CommentsOnTweetsCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentsOnTweetsWhereUniqueInput[] | undefined;
}
