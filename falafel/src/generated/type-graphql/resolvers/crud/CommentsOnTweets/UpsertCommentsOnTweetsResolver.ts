import * as TypeGraphQL from "type-graphql";
import { UpsertCommentsOnTweetsArgs } from "./args/UpsertCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class UpsertCommentsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: false
  })
  async upsertCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCommentsOnTweetsArgs): Promise<CommentsOnTweets> {
    return getPrismaFromContext(ctx).commentsOnTweets.upsert(args);
  }
}
