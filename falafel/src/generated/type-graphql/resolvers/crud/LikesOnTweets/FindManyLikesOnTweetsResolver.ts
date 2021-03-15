import * as TypeGraphQL from "type-graphql";
import { FindManyLikesOnTweetsArgs } from "./args/FindManyLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class FindManyLikesOnTweetsResolver {
  @TypeGraphQL.Query(_returns => [LikesOnTweets], {
    nullable: false
  })
  async findManyLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLikesOnTweetsArgs): Promise<LikesOnTweets[]> {
    return getPrismaFromContext(ctx).likesOnTweets.findMany(args);
  }
}
