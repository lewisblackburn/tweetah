import {
  Arg,
  Args,
  Authorized,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { FindManyLikeArgs, Like } from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(() => Like)
export class LikeResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Boolean, {
    nullable: false,
  })
  async like(
    @Ctx() ctx: Context,
    @Arg("tweetId", (type) => Int) tweetId: number
  ): Promise<boolean> {
    const userId = ctx.req.session.userId || -1;
    try {
      await ctx.prisma.like
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
              likeAmount: {
                increment: 1,
              },
            },
          });
        });
      return true;
    } catch (e) {
      await ctx.prisma.like
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
              likeAmount: {
                decrement: 1,
              },
            },
          });
        });
      return false;
    }
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Like], {
    nullable: false,
  })
  async likes(
    @Ctx() ctx: Context,
    @Args() args: FindManyLikeArgs
  ): Promise<Like[]> {
    return ctx.prisma.like.findMany(args);
  }
}
