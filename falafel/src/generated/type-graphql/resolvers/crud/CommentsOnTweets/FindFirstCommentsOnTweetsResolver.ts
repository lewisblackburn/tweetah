import * as TypeGraphQL from "type-graphql";
import { FindFirstCommentsOnTweetsArgs } from "./args/FindFirstCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class FindFirstCommentsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => CommentsOnTweets, {
    nullable: true
  })
  async findFirstCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.findFirst(args);
  }
}
