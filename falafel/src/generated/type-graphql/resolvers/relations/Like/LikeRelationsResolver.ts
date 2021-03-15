import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { LikeTweetsArgs } from "./args/LikeTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Like)
export class LikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [LikesOnTweets], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LikeTweetsArgs): Promise<LikesOnTweets[]> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).tweets(args);
  }
}
