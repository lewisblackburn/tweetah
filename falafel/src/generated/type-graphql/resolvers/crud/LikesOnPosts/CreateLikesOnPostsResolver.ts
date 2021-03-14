import * as TypeGraphQL from "type-graphql";
import { CreateLikesOnPostsArgs } from "./args/CreateLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class CreateLikesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: false
  })
  async createLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLikesOnPostsArgs): Promise<LikesOnPosts> {
    return getPrismaFromContext(ctx).likesOnPosts.create(args);
  }
}
