import * as TypeGraphQL from "type-graphql";
import { DeleteManyCommentsOnTweetsArgs } from "./args/DeleteManyCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class DeleteManyCommentsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommentsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).commentsOnTweets.deleteMany(args);
  }
}
