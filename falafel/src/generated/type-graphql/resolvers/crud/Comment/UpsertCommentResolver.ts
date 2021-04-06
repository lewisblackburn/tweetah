import * as TypeGraphQL from "type-graphql";
import { UpsertCommentArgs } from "./args/UpsertCommentArgs";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class UpsertCommentResolver {
  @TypeGraphQL.Mutation(_returns => Comment, {
    nullable: false
  })
  async upsertComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCommentArgs): Promise<Comment> {
    return getPrismaFromContext(ctx).comment.upsert(args);
  }
}
