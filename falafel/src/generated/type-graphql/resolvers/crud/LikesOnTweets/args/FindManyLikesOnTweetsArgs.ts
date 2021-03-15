import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LikesOnTweetsOrderByInput } from "../../../inputs/LikesOnTweetsOrderByInput";
import { LikesOnTweetsWhereInput } from "../../../inputs/LikesOnTweetsWhereInput";
import { LikesOnTweetsWhereUniqueInput } from "../../../inputs/LikesOnTweetsWhereUniqueInput";
import { LikesOnTweetsScalarFieldEnum } from "../../../../enums/LikesOnTweetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLikesOnTweetsArgs {
  @TypeGraphQL.Field(_type => LikesOnTweetsWhereInput, {
    nullable: true
  })
  where?: LikesOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsOrderByInput], {
    nullable: true
  })
  orderBy?: LikesOnTweetsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LikesOnTweetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: LikesOnTweetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LikesOnTweetsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tweetId" | "userId" | "createdAt" | "likeId"> | undefined;
}
