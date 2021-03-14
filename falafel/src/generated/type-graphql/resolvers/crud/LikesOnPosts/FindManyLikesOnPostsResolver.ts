import * as TypeGraphQL from "type-graphql";
import { FindManyLikesOnPostsArgs } from "./args/FindManyLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class FindManyLikesOnPostsResolver {
  @TypeGraphQL.Query(_returns => [LikesOnPosts], {
    nullable: false
  })
  async findManyLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLikesOnPostsArgs): Promise<LikesOnPosts[]> {
    return getPrismaFromContext(ctx).likesOnPosts.findMany(args);
  }
}
