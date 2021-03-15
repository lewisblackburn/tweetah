import * as TypeGraphQL from "type-graphql";
import { CreateCommentArgs } from "./args/CreateCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CreateCommentResolver {
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: false
  })
  async createComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommentArgs): Promise<Comment> {
    return getPrismaFromContext(ctx).comment.create(args);
  }
}
