import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RetweetsOnTweetsOrderByInput } from "../../../inputs/RetweetsOnTweetsOrderByInput";
import { RetweetsOnTweetsWhereInput } from "../../../inputs/RetweetsOnTweetsWhereInput";
import { RetweetsOnTweetsWhereUniqueInput } from "../../../inputs/RetweetsOnTweetsWhereUniqueInput";
import { RetweetsOnTweetsScalarFieldEnum } from "../../../../enums/RetweetsOnTweetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TweetRetweetsOnTweetsArgs {
  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereInput, {
    nullable: true
  })
  where?: RetweetsOnTweetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsOrderByInput], {
    nullable: true
  })
  orderBy?: RetweetsOnTweetsOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => RetweetsOnTweetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RetweetsOnTweetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RetweetsOnTweetsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"tweetId" | "userId" | "createdAt" | "retweetId"> | undefined;
}
