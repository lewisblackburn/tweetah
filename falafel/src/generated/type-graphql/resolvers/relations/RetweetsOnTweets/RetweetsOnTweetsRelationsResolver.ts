import * as TypeGraphQL from "type-graphql";
import { Retweet } from "../../../models/Retweet";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class RetweetsOnTweetsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tweet, {
    nullable: false
  })
  async tweet(@TypeGraphQL.Root() retweetsOnTweets: RetweetsOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<Tweet> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: retweetsOnTweets.tweetId,
          userId: retweetsOnTweets.userId,
        },
      },
    }).tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() retweetsOnTweets: RetweetsOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: retweetsOnTweets.tweetId,
          userId: retweetsOnTweets.userId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Retweet, {
    nullable: true
  })
  async reweet(@TypeGraphQL.Root() retweetsOnTweets: RetweetsOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: retweetsOnTweets.tweetId,
          userId: retweetsOnTweets.userId,
        },
      },
    }).reweet({});
  }
}
