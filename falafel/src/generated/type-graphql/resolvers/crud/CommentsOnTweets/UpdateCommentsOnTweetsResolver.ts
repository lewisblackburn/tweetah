import * as TypeGraphQL from "type-graphql";
import { UpdateCommentsOnTweetsArgs } from "./args/UpdateCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class UpdateCommentsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: true
  })
  async updateCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.update(args);
  }
}
