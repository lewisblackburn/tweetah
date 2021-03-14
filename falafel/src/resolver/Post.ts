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
  FindManyPostArgs,
  Post,
  User,
  UserFollowingArgs,
} from "../generated/type-graphql";
import { Context } from "../interfaces/context";

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => Boolean)
  async liked(@Root() root: any, @Ctx() ctx: Context): Promise<Boolean> {
    const postId = root.id;
    const userId = ctx.req.session.userId;

    if (!userId) return false;

    const likeOnPost = await ctx.prisma.likesOnPosts.findUnique({
      where: {
        postId_userId: { postId, userId: userId! },
      },
    });

    if (likeOnPost) return true;
    return false;
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => Post, { nullable: true })
  post(@Arg("postId", (type) => Int) postId: number, @Ctx() ctx: Context) {
    return ctx.prisma.post.findUnique({
      where: { id: postId },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [User], {
    nullable: false,
  })
  async feed(
    @Ctx() ctx: Context,
    @Args() args: UserFollowingArgs
  ): Promise<User[]> {
    return ctx.prisma.user
      .findUnique({
        where: {
          id: ctx.req.session.userId,
        },
      })
      .following(args);
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Post], {
    nullable: false,
  })
  async posts(
    @Ctx() ctx: Context,
    @Args() args: FindManyPostArgs
  ): Promise<Post[]> {
    return ctx.prisma.post.findMany(args);
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [Post])
  search(@Arg("searchString") searchString: string, @Ctx() ctx: Context) {
    return ctx.prisma.post.findMany({
      where: {
        OR: [
          { author: { username: { contains: searchString } } },
          { content: { contains: searchString } },
        ],
      },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Post)
  createDraft(
    @Arg("content", { nullable: true }) content: string,

    @Ctx() ctx: Context
  ): Promise<Post> {
    return ctx.prisma.post.create({
      data: {
        content: content,
        author: {
          connect: { id: ctx.req.session.userId },
        },
      },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Post, { nullable: true })
  async publish(
    @Arg("postId", (type) => Int) postId: number,
    @Ctx() ctx: Context
  ): Promise<Post | null> {
    const post = await ctx.prisma.post.findUnique({
      where: { id: postId },
    });

    if (post?.authorId !== ctx.req.session.userId)
      throw new Error("you can only publish your own post");

    return ctx.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        published: true,
      },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Post, { nullable: true })
  async deletePost(
    @Arg("postId", (type) => Int) postId: number,
    @Ctx() ctx: Context
  ): Promise<Post | null> {
    const post = await ctx.prisma.post.findUnique({
      where: { id: postId },
    });
    if (post?.authorId !== ctx.req.session.userId)
      throw new Error("you can only delete your own post");

    return ctx.prisma.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
