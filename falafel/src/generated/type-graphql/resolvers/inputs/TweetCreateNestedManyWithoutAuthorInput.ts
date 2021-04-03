import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutAuthorInput } from "../inputs/TweetCreateOrConnectWithoutAuthorInput";
import { TweetCreateWithoutAuthorInput } from "../inputs/TweetCreateWithoutAuthorInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [TweetCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: TweetCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  connect?: TweetWhereUniqueInput[] | undefined;
}
