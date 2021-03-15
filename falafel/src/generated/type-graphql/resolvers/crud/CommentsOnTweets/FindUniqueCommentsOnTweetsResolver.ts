import * as TypeGraphQL from "type-graphql";
import { FindUniqueCommentsOnTweetsArgs } from "./args/FindUniqueCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class FindUniqueCommentsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => CommentsOnTweets, {
    nullable: true
  })
  async findUniqueCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.findUnique(args);
  }
}
