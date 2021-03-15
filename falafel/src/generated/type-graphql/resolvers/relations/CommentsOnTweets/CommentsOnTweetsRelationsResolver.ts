import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class CommentsOnTweetsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tweet, {
    nullable: false
  })
  async tweet(@TypeGraphQL.Root() commentsOnTweets: CommentsOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<Tweet> {
    return getPrismaFromContext(ctx).commentsOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: commentsOnTweets.tweetId,
          userId: commentsOnTweets.userId,
        },
      },
    }).tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() commentsOnTweets: CommentsOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).commentsOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: commentsOnTweets.tweetId,
          userId: commentsOnTweets.userId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: true
  })
  async comment(@TypeGraphQL.Root() commentsOnTweets: CommentsOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<Comment | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: commentsOnTweets.tweetId,
          userId: commentsOnTweets.userId,
        },
      },
    }).comment({});
  }
}
