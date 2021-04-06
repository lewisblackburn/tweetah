import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tweet, {
    nullable: false
  })
  async tweet(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Tweet> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        tweetId_userId: {
          tweetId: comment.tweetId,
          userId: comment.userId,
        },
      },
    }).tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        tweetId_userId: {
          tweetId: comment.tweetId,
          userId: comment.userId,
        },
      },
    }).user({});
  }
}
