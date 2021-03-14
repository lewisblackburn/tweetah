import * as TypeGraphQL from "type-graphql";
import { FindFirstLikesOnPostsArgs } from "./args/FindFirstLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class FindFirstLikesOnPostsResolver {
  @TypeGraphQL.Query(_returns => LikesOnPosts, {
    nullable: true
  })
  async findFirstLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.findFirst(args);
  }
}
