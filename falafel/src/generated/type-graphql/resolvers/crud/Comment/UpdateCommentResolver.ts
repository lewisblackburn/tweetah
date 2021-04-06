import * as TypeGraphQL from "type-graphql";
import { UpdateCommentArgs } from "./args/UpdateCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class UpdateCommentResolver {
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: true
  })
  async updateComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCommentArgs): Promise<Comment | null> {
    return getPrismaFromContext(ctx).comment.update(args);
  }
}
