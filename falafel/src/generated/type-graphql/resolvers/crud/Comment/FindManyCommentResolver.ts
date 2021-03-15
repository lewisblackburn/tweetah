import * as TypeGraphQL from "type-graphql";
import { FindManyCommentArgs } from "./args/FindManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class FindManyCommentResolver {
  @TypeGraphQL.Query(_returns => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCommentArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).comment.findMany(args);
  }
}
