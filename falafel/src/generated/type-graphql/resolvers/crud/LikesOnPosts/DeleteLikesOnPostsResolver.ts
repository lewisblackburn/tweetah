import * as TypeGraphQL from "type-graphql";
import { DeleteLikesOnPostsArgs } from "./args/DeleteLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class DeleteLikesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: true
  })
  async deleteLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.delete(args);
  }
}
