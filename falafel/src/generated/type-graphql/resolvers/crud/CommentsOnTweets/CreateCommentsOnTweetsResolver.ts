import * as TypeGraphQL from "type-graphql";
import { CreateCommentsOnTweetsArgs } from "./args/CreateCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class CreateCommentsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: false
  })
  async createCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommentsOnTweetsArgs): Promise<CommentsOnTweets> {
    return getPrismaFromContext(ctx).commentsOnTweets.create(args);
  }
}
