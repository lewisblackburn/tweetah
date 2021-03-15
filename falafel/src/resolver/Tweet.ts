import "reflect-metadata";
import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import {
  CreateTweetArgs,
  FindManyTweetArgs,
  Tweet,
} from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(Tweet)
export class TweetResovler {
  @FieldResolver(() => Boolean)
  async liked(@Root() root: any, @Ctx() ctx: Context): Promise<Boolean> {
    const tweetId = root.id;
    const userId = ctx.req.session.userId;

    if (!userId || !tweetId) return false;

    const likeOnTweet = await ctx.prisma.likesOnTweets.findUnique({
      where: {
        tweetId_userId: { tweetId, userId },
      },
    });

    if (likeOnTweet) return true;
    return false;
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => Tweet, { nullable: true })
  tweet(@Arg("tweetId", (type) => Int) tweetId: number, @Ctx() ctx: Context) {
    return ctx.prisma.tweet.findUnique({
      where: { id: tweetId },
    });
  }

  // @Authorized(["USER", "ADMIN"])
  // @Query(() => [User], {
  //   nullable: false,
  // })
  // async feed(
  //   @Ctx() ctx: Context,
  //   @Args() args: UserFollowingArgs
  // ): Promise<User[]> {
  //   return ctx.prisma.user
  //     .findUnique({
  //       where: {
  //         id: ctx.req.session.userId,
  //       },
  //     })
  //     .following(args);
  // }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Tweet], {
    nullable: false,
  })
  async tweets(
    @Ctx() ctx: Context,
    @Args() args: FindManyTweetArgs
  ): Promise<Tweet[]> {
    return ctx.prisma.tweet.findMany(args);
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Tweet])
  search(@Arg("searchString") searchString: string, @Ctx() ctx: Context) {
    return ctx.prisma.tweet.findMany({
      where: {
        OR: [
          { author: { username: { contains: searchString } } },
          { text: { contains: searchString } },
        ],
      },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Tweet, {
    nullable: false,
  })
  async createTweet(
    @Ctx() ctx: Context,
    @Args() args: CreateTweetArgs
  ): Promise<Tweet> {
    return ctx.prisma.tweet.create(args);
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Tweet, { nullable: true })
  async deleteTweet(
    @Arg("tweetId", (type) => Int) tweetId: number,
    @Ctx() ctx: Context
  ): Promise<Tweet | null> {
    const tweet = await ctx.prisma.tweet.findUnique({
      where: { id: tweetId },
    });
    if (tweet?.authorId !== ctx.req.session.userId)
      throw new Error("You can only delete your own post!");

    return ctx.prisma.tweet.delete({
      where: {
        id: tweetId,
      },
    });
  }
}
