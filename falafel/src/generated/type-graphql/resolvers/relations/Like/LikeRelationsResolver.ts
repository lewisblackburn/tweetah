import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Like)
export class LikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Tweet, {
    nullable: false
  })
  async tweet(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<Tweet> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        tweetId_userId: {
          tweetId: like.tweetId,
          userId: like.userId,
        },
      },
    }).tweet({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        tweetId_userId: {
          tweetId: like.tweetId,
          userId: like.userId,
        },
      },
    }).user({});
  }
}
