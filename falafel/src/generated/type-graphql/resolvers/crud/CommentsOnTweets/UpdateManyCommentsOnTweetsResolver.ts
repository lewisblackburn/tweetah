import * as TypeGraphQL from "type-graphql";
import { UpdateManyCommentsOnTweetsArgs } from "./args/UpdateManyCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class UpdateManyCommentsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommentsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).commentsOnTweets.updateMany(args);
  }
}
