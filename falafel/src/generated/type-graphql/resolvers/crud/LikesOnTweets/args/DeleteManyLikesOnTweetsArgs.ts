import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsWhereInput } from "../../../inputs/LikesOnTweetsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereInput, {
    nullable: true
  })
  where?: LikesOnTweetsWhereInput | undefined;
}
