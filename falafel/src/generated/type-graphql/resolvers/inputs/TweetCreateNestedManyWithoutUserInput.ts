import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutUserInput } from "../inputs/TweetCreateOrConnectWithoutUserInput";
import { TweetCreateWithoutUserInput } from "../inputs/TweetCreateWithoutUserInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TweetCreateWithoutUserInput], {
    nullable: true
  })
  create?: TweetCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  connect?: TweetWhereUniqueInput[] | undefined;
}
