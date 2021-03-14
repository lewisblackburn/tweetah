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
  FindManyLikesOnPostsArgs,
  LikesOnPosts,
} from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(() => LikesOnPosts)
export class LikeResolver {
  @Authorized(["USER", "ADMIN"])
  @Mutation(() => LikesOnPosts, {
    nullable: false,
  })
  async like(
    @Ctx() ctx: Context,
    @Arg("postId", (type) => Int) postId: number
  ): Promise<LikesOnPosts> {
    const userId = ctx.req.session.userId;

    const likeOnPost = await ctx.prisma.likesOnPosts.findUnique({
      where: {
        postId_userId: { postId, userId: userId! },
      },
    });

    if (likeOnPost) {
      return ctx.prisma.likesOnPosts.delete({
        where: {
          postId_userId: { postId, userId: userId! },
        },
      });
    } else {
      return ctx.prisma.likesOnPosts.create({
        data: {
          post: {
            connect: { id: postId },
          },
          user: {
            connect: { id: userId },
          },
        },
      });
    }
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [LikesOnPosts], {
    nullable: false,
  })
  async likes(
    @Ctx() ctx: Context,
    @Args() args: FindManyLikesOnPostsArgs
  ): Promise<LikesOnPosts[]> {
    return ctx.prisma.likesOnPosts.findMany(args);
  }
}
