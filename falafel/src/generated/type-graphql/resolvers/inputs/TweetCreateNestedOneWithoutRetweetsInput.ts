import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutRetweetsInput } from "../inputs/TweetCreateOrConnectWithoutRetweetsInput";
import { TweetCreateWithoutRetweetsInput } from "../inputs/TweetCreateWithoutRetweetsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateNestedOneWithoutRetweetsInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutRetweetsInput, {
    nullable: true
  })
  create?: TweetCreateWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutRetweetsInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutRetweetsInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;
}
