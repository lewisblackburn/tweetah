import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateNestedManyWithoutAuthorInput } from "../inputs/TweetCreateNestedManyWithoutAuthorInput";
import { UserCreateNestedManyWithoutFollowedByInput } from "../inputs/UserCreateNestedManyWithoutFollowedByInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followedBy?: UserCreateNestedManyWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowedByInput, {
    nullable: true
  })
  following?: UserCreateNestedManyWithoutFollowedByInput | undefined;

  @TypeGraphQL.Field(_type => TweetCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  tweets?: TweetCreateNestedManyWithoutAuthorInput | undefined;
}
