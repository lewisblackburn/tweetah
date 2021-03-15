import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateWithoutAuthorInput } from "../inputs/TweetCreateWithoutAuthorInput";
import { TweetUpdateWithoutAuthorInput } from "../inputs/TweetUpdateWithoutAuthorInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => TweetWhereUniqueInput, {
    nullable: false
  })
  where!: TweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TweetUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: TweetUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => TweetCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: TweetCreateWithoutAuthorInput;
}
