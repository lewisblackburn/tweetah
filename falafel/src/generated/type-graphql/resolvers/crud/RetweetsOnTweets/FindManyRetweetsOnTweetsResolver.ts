import * as TypeGraphQL from "type-graphql";
import { FindManyRetweetsOnTweetsArgs } from "./args/FindManyRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class FindManyRetweetsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => [RetweetsOnTweets], {
    nullable: false
  })
  async findManyRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRetweetsOnTweetsArgs): Promise<RetweetsOnTweets[]> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findMany(args);
  }
}
