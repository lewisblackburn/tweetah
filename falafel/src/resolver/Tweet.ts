import "reflect-metadata";
import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Tweet } from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(Tweet)
export class TweetResolver {
  @FieldResolver(() => Boolean)
  async liked(@Root() root: any, @Ctx() ctx: Context): Promise<Boolean> {
    const userId = ctx.req.session.userId;
    if (!userId) throw Error("You need to be authenticated");
    const like = await ctx.prisma.like.findUnique({
      where: {
        tweetId_userId: { tweetId: root.id, userId },
      },
    });
    return !!like;
  }

  @FieldResolver(() => Boolean)
  async retweeted(@Root() root: any, @Ctx() ctx: Context): Promise<Boolean> {
    const userId = ctx.req.session.userId;
    if (!userId) throw Error("You need to be authenticated");
    const retweet = await ctx.prisma.retweet.findUnique({
      where: {
        tweetId_userId: { tweetId: root.id, userId },
      },
    });
    return !!retweet;
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => Tweet, { nullable: true })
  tweet(@Arg("tweetId", (type) => Int) tweetId: number, @Ctx() ctx: Context) {
    return ctx.prisma.tweet.findUnique({
      where: {
        id: tweetId,
      },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Tweet], {
    nullable: false,
  })
  async tweets(
    @Ctx() ctx: Context,
    @Arg("take", (type) => Int) take: number,
    @Arg("offset", (type) => Int) offset: number
  ): Promise<Tweet[]> {
    const userId = ctx.req.session.userId || -1;
    const users = await ctx.prisma.user
      .findUnique({
        where: { id: userId },
      })
      .following({
        select: {
          id: true,
        },
      });
    const userIds = users.map((x) => x.id);
    return ctx.prisma.tweet.findMany({
      where: {
        userId: {
          in: [userId, ...userIds],
        },
      },
      orderBy: { createdAt: "desc" },
      take,
      skip: offset,
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Tweet])
  search(@Arg("searchString") searchString: string, @Ctx() ctx: Context) {
    return ctx.prisma.tweet.findMany({
      where: {
        OR: [
          { user: { username: { contains: searchString } } },
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
    @Arg("text") text: string
  ): Promise<Tweet> {
    const userId = ctx.req.session.userId;
    return ctx.prisma.tweet.create({
      data: {
        text,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
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
    if (tweet?.userId !== ctx.req.session.userId)
      throw new Error("You can only delete your own tweet!");

    return ctx.prisma.tweet.delete({
      where: {
        id: tweetId,
      },
    });
  }
}
