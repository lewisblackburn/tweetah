import * as TypeGraphQL from "type-graphql";
import { FindFirstCommentArgs } from "./args/FindFirstCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class FindFirstCommentResolver {
  @TypeGraphQL.Query(_returns => Comment, {
    nullable: true
  })
  async findFirstComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCommentArgs): Promise<Comment | null> {
    return getPrismaFromContext(ctx).comment.findFirst(args);
  }
}
