import * as TypeGraphQL from "type-graphql";
import { UpdateManyLikesOnPostsArgs } from "./args/UpdateManyLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class UpdateManyLikesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLikesOnPostsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnPosts.updateMany(args);
  }
}
