import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { CommentTweetsArgs } from "./args/CommentTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CommentsOnTweets], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CommentTweetsArgs): Promise<CommentsOnTweets[]> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).tweets(args);
  }
}
