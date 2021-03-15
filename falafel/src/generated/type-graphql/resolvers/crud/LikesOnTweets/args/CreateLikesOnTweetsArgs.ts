import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsCreateInput } from "../../../inputs/LikesOnTweetsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsCreateInput, {
    nullable: false
  })
  data!: LikesOnTweetsCreateInput;
}
