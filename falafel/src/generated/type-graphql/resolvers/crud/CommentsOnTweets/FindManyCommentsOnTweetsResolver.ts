import * as TypeGraphQL from "type-graphql";
import { FindManyCommentsOnTweetsArgs } from "./args/FindManyCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class FindManyCommentsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => [CommentsOnTweets], {
    nullable: false
  })
  async findManyCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCommentsOnTweetsArgs): Promise<CommentsOnTweets[]> {
    return getPrismaFromContext(ctx).commentsOnTweets.findMany(args);
  }
}
