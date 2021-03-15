import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentsOnTweetsOrderByInput } from "../../../inputs/CommentsOnTweetsOrderByInput";
import { CommentsOnTweetsWhereInput } from "../../../inputs/CommentsOnTweetsWhereInput";
import { CommentsOnTweetsWhereUniqueInput } from "../../../inputs/CommentsOnTweetsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCommentsOnTweetsArgs {
  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereInput, {
    nullable: true
  })
  where?: CommentsOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentsOnTweetsOrderByInput], {
    nullable: true
  })
  orderBy?: CommentsOnTweetsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentsOnTweetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommentsOnTweetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
