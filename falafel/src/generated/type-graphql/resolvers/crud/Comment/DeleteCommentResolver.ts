import * as TypeGraphQL from "type-graphql";
import { DeleteCommentArgs } from "./args/DeleteCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class DeleteCommentResolver {
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: true
  })
  async deleteComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommentArgs): Promise<Comment | null> {
    return getPrismaFromContext(ctx).comment.delete(args);
  }
}
