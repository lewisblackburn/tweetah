import * as TypeGraphQL from "type-graphql";
import { UpdateLikesOnPostsArgs } from "./args/UpdateLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class UpdateLikesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: true
  })
  async updateLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.update(args);
  }
}
