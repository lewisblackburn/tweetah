import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsWhereUniqueInput } from "../../../inputs/LikesOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: false
  })
  where!: LikesOnTweetsWhereUniqueInput;
}
