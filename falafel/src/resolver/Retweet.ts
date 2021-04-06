import { Arg, Authorized, Ctx, Int, Mutation, Resolver } from "type-graphql";
import { Retweet } from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(() => Retweet)
export class RetweetResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Boolean, {
    nullable: false,
  })
  async retweet(
    @Ctx() ctx: Context,
    @Arg("tweetId", (type) => Int) tweetId: number
  ): Promise<Boolean> {
    const userId = ctx.req.session.userId || -1;
    try {
      await ctx.prisma.retweet
        .create({
          data: {
            tweet: {
              connect: {
                id: tweetId,
              },
            },
            user: {
              connect: {
                id: userId,
              },
            },
          },
        })
        .then(async () => {
          await ctx.prisma.tweet.update({
            where: {
              id: tweetId,
            },
            data: {
              retweetAmount: {
                increment: 1,
              },
            },
          });
        });
      return true;
    } catch (e) {
      await ctx.prisma.retweet
        .delete({
          where: {
            tweetId_userId: { tweetId, userId },
          },
        })
        .then(async () => {
          await ctx.prisma.tweet.update({
            where: {
              id: tweetId,
            },
            data: {
              retweetAmount: {
                decrement: 1,
              },
            },
          });
        });
      return false;
    }
  }
}
