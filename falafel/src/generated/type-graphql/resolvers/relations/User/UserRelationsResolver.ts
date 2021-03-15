import * as TypeGraphQL from "type-graphql";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowedByArgs } from "./args/UserFollowedByArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikesArgs } from "./args/UserLikesArgs";
import { UserRetweetsArgs } from "./args/UserRetweetsArgs";
import { UserTweetsArgs } from "./args/UserTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async followedBy(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowedByArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followedBy(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Tweet], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTweetsArgs): Promise<Tweet[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).tweets(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LikesOnTweets], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikesArgs): Promise<LikesOnTweets[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => [RetweetsOnTweets], {
    nullable: false
  })
  async retweets(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRetweetsArgs): Promise<RetweetsOnTweets[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).retweets(args);
  }

  @TypeGraphQL.FieldResolver(_type => [CommentsOnTweets], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentsArgs): Promise<CommentsOnTweets[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).comments(args);
  }
}
