import * as TypeGraphQL from "type-graphql";
import { UpsertLikesOnPostsArgs } from "./args/UpsertLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class UpsertLikesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: false
  })
  async upsertLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLikesOnPostsArgs): Promise<LikesOnPosts> {
    return getPrismaFromContext(ctx).likesOnPosts.upsert(args);
  }
}
