import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { TweetLikesArgs } from "./args/TweetLikesArgs";
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
}
