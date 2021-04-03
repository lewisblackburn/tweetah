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
    const tweetId = root.id;
    const userId = ctx.req.session.userId;

    if (!userId || !tweetId) return false;

    const like = await ctx.prisma.like.findUnique({
      where: {
        tweetId_userId: { tweetId, userId },
      },
    });

    if (!like) return false;
    return true;
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
    // const count = await ctx.prisma.user.count()
    // const hasMore = typeof take === "number" ? skip + take < count : false
    return ctx.prisma.tweet.findMany({
      where: {
        authorId: {
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
    @Arg("text") text: string
  ): Promise<Tweet> {
    const userId = ctx.req.session.userId;
    return ctx.prisma.tweet.create({
      data: {
        text,
        author: {
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
    if (tweet?.authorId !== ctx.req.session.userId)
      throw new Error("You can only delete your own tweet!");

    return ctx.prisma.tweet.delete({
      where: {
        id: tweetId,
      },
    });
  }
}
