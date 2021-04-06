import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Like } from "../../../models/Like";
import { Retweet } from "../../../models/Retweet";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { TweetCommentsArgs } from "./args/TweetCommentsArgs";
import { TweetLikesArgs } from "./args/TweetLikesArgs";
import { TweetRetweetsArgs } from "./args/TweetRetweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class TweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Like], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetLikesArgs): Promise<Like[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Retweet], {
    nullable: false
  })
  async retweets(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetRetweetsArgs): Promise<Retweet[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).retweets(args);
  }
}
