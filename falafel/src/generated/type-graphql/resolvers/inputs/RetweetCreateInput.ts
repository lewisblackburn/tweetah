import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateNestedOneWithoutRetweetsInput } from "../inputs/TweetCreateNestedOneWithoutRetweetsInput";
import { UserCreateNestedOneWithoutRetweetsInput } from "../inputs/UserCreateNestedOneWithoutRetweetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RetweetCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedOneWithoutRetweetsInput, {
    nullable: false
  })
  tweet!: TweetCreateNestedOneWithoutRetweetsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRetweetsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRetweetsInput;
}
