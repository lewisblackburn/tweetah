import * as TypeGraphQL from "type-graphql";
import { FindUniqueLikesOnPostsArgs } from "./args/FindUniqueLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class FindUniqueLikesOnPostsResolver {
  @TypeGraphQL.Query(_returns => LikesOnPosts, {
    nullable: true
  })
  async findUniqueLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.findUnique(args);
  }
}
