import * as TypeGraphQL from "type-graphql";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { TweetCommentsArgs } from "./args/TweetCommentsArgs";
import { TweetLikesOnTweetsArgs } from "./args/TweetLikesOnTweetsArgs";
import { TweetRetweetsOnTweetsArgs } from "./args/TweetRetweetsOnTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class TweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [CommentsOnTweets], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetCommentsArgs): Promise<CommentsOnTweets[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [RetweetsOnTweets], {
    nullable: false
  })
  async RetweetsOnTweets(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetRetweetsOnTweetsArgs): Promise<RetweetsOnTweets[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).RetweetsOnTweets(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LikesOnTweets], {
    nullable: false
  })
  async LikesOnTweets(@TypeGraphQL.Root() tweet: Tweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TweetLikesOnTweetsArgs): Promise<LikesOnTweets[]> {
    return getPrismaFromContext(ctx).tweet.findUnique({
      where: {
        id: tweet.id,
      },
    }).LikesOnTweets(args);
  }
}
