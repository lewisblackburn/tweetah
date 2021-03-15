import * as TypeGraphQL from "type-graphql";
import { FindFirstLikesOnTweetsArgs } from "./args/FindFirstLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class FindFirstLikesOnTweetsResolver {
  @TypeGraphQL.Query(_returns => LikesOnTweets, {
    nullable: true
  })
  async findFirstLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.findFirst(args);
  }
}
