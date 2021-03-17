import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { Tweet } from "../../../models/Tweet";
import { User } from "../../../models/User";
import { UserFollowedByArgs } from "./args/UserFollowedByArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikesArgs } from "./args/UserLikesArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Like], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserLikesArgs): Promise<Like[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).likes(args);
  }
}
