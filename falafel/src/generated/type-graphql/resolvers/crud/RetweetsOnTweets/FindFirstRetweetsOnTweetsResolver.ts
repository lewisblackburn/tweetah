import * as TypeGraphQL from "type-graphql";
import { FindFirstRetweetsOnTweetsArgs } from "./args/FindFirstRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class FindFirstRetweetsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async findFirstRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findFirst(args);
  }
}
