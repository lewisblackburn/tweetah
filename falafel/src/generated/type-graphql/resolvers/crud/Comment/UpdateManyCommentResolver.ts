import * as TypeGraphQL from "type-graphql";
import { UpdateManyCommentArgs } from "./args/UpdateManyCommentArgs";
import { Comment } from "../../../models/Comment";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class UpdateManyCommentResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommentArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).comment.updateMany(args);
  }
}
