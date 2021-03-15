import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class LikesOnTweetsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tweet, {
    nullable: false
  })
  async tweet(@TypeGraphQL.Root() likesOnTweets: LikesOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<Tweet> {
    return getPrismaFromContext(ctx).likesOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: likesOnTweets.tweetId,
          userId: likesOnTweets.userId,
        },
      },
    }).tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() likesOnTweets: LikesOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).likesOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: likesOnTweets.tweetId,
          userId: likesOnTweets.userId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Like, {
    nullable: true
  })
  async like(@TypeGraphQL.Root() likesOnTweets: LikesOnTweets, @TypeGraphQL.Ctx() ctx: any): Promise<Like | null> {
    return getPrismaFromContext(ctx).likesOnTweets.findUnique({
      where: {
        tweetId_userId: {
          tweetId: likesOnTweets.tweetId,
          userId: likesOnTweets.userId,
        },
      },
    }).like({});
  }
}
