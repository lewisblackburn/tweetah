import * as TypeGraphQL from "type-graphql";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { Post } from "../../../models/Post";
import { User } from "../../../models/User";
import { PostLikesArgs } from "./args/PostLikesArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Post)
export class PostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [LikesOnPosts], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() post: Post, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PostLikesArgs): Promise<LikesOnPosts[]> {
    return getPrismaFromContext(ctx).post.findUnique({
      where: {
        id: post.id,
      },
    }).likes(args);
  }
}
