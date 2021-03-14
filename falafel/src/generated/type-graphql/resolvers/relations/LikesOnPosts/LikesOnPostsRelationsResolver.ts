import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class LikesOnPostsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async post(@TypeGraphQL.Root() likesOnPosts: LikesOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Post> {
    return getPrismaFromContext(ctx).likesOnPosts.findUnique({
      where: {
        postId_userId: {
          postId: likesOnPosts.postId,
          userId: likesOnPosts.userId,
        },
      },
    }).post({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() likesOnPosts: LikesOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).likesOnPosts.findUnique({
      where: {
        postId_userId: {
          postId: likesOnPosts.postId,
          userId: likesOnPosts.userId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Like, {
    nullable: true
  })
  async like(@TypeGraphQL.Root() likesOnPosts: LikesOnPosts, @TypeGraphQL.Ctx() ctx: any): Promise<Like | null> {
    return getPrismaFromContext(ctx).likesOnPosts.findUnique({
      where: {
        postId_userId: {
          postId: likesOnPosts.postId,
          userId: likesOnPosts.userId,
        },
      },
    }).like({});
  }
}
