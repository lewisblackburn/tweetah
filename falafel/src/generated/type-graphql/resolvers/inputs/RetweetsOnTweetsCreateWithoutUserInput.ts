import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RetweetCreateNestedOneWithoutTweetsInput } from "../inputs/RetweetCreateNestedOneWithoutTweetsInput";
import { TweetCreateNestedOneWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateNestedOneWithoutRetweetsOnTweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedOneWithoutRetweetsOnTweetsInput, {
    nullable: false
  })
  tweet!: TweetCreateNestedOneWithoutRetweetsOnTweetsInput;

  @TypeGraphQL.Field(_type => RetweetCreateNestedOneWithoutTweetsInput, {
    nullable: true
  })
  reweet?: RetweetCreateNestedOneWithoutTweetsInput | undefined;
}
