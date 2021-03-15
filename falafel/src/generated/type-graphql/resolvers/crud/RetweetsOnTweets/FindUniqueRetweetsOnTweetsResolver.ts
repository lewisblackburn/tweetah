import * as TypeGraphQL from "type-graphql";
import { FindUniqueRetweetsOnTweetsArgs } from "./args/FindUniqueRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class FindUniqueRetweetsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async findUniqueRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findUnique(args);
  }
}
