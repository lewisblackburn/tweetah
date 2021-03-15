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
import {
  FindManyLikesOnTweetsArgs,
  LikesOnTweets,
} from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(() => LikesOnTweets)
export class LikeResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => LikesOnTweets, {
    nullable: false,
  })
  async like(
    @Ctx() ctx: Context,
    @Arg("tweetId", (type) => Int) tweetId: number
  ): Promise<LikesOnTweets> {
    const userId = ctx.req.session.userId || -1;

    const likeOnTweet = await ctx.prisma.likesOnTweets.findUnique({
      where: {
        tweetId_userId: { tweetId, userId },
      },
    });

    if (likeOnTweet) {
      return ctx.prisma.likesOnTweets.delete({
        where: {
          tweetId_userId: { tweetId, userId },
        },
      });
    } else {
      return ctx.prisma.likesOnTweets.create({
        data: {
          tweet: {
            connect: { id: tweetId },
          },
          user: {
            connect: { id: userId },
          },
        },
      });
    }
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [LikesOnTweets], {
    nullable: false,
  })
  async likes(
    @Ctx() ctx: any,
    @Args() args: FindManyLikesOnTweetsArgs
  ): Promise<LikesOnTweets[]> {
    return ctx.prisma.likesOnTweets.findMany(args);
  }
}
