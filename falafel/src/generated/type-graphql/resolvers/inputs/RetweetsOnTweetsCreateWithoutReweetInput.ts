import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateNestedOneWithoutRetweetsOnTweetsInput } from "../inputs/TweetCreateNestedOneWithoutRetweetsOnTweetsInput";
import { UserCreateNestedOneWithoutRetweetsInput } from "../inputs/UserCreateNestedOneWithoutRetweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetsOnTweetsCreateWithoutReweetInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedOneWithoutRetweetsOnTweetsInput, {
    nullable: false
  })
  tweet!: TweetCreateNestedOneWithoutRetweetsOnTweetsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRetweetsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRetweetsInput;
}
