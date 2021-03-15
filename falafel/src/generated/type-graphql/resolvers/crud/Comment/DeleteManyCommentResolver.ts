import * as TypeGraphQL from "type-graphql";
import { DeleteManyCommentArgs } from "./args/DeleteManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class DeleteManyCommentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).comment.deleteMany(args);
  }
}
