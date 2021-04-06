import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutCommentsInput } from "../inputs/TweetCreateOrConnectWithoutCommentsInput";
import { TweetCreateWithoutCommentsInput } from "../inputs/TweetCreateWithoutCommentsInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => TweetCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: TweetCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: true
  })
  connect?: TweetWhereUniqueInput | undefined;
}
