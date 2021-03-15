import * as TypeGraphQL from "type-graphql";
import { DeleteCommentsOnTweetsArgs } from "./args/DeleteCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class DeleteCommentsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: true
  })
  async deleteCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.delete(args);
  }
}
