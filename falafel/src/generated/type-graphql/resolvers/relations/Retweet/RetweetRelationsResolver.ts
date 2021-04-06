import * as TypeGraphQL from "type-graphql";
import { Retweet } from "../../../models/Retweet";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class RetweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tweet, {
    nullable: false
  })
  async tweet(@TypeGraphQL.Root() retweet: Retweet, @TypeGraphQL.Ctx() ctx: any): Promise<Tweet> {
    return getPrismaFromContext(ctx).retweet.findUnique({
      where: {
        tweetId_userId: {
          tweetId: retweet.tweetId,
          userId: retweet.userId,
        },
      },
    }).tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() retweet: Retweet, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).retweet.findUnique({
      where: {
        tweetId_userId: {
          tweetId: retweet.tweetId,
          userId: retweet.userId,
        },
      },
    }).user({});
  }
}
