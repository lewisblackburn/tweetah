import * as TypeGraphQL from "type-graphql";
import { DeleteManyLikesOnPostsArgs } from "./args/DeleteManyLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class DeleteManyLikesOnPostsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLikesOnPostsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnPosts.deleteMany(args);
  }
}
