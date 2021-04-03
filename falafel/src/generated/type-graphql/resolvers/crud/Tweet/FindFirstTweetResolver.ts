import * as TypeGraphQL from "type-graphql";
import { FindFirstTweetArgs } from "./args/FindFirstTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class FindFirstTweetResolver {
  @TypeGraphQL.Query(_returns => Tweet, {
    nullable: true
  })
  async findFirstTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.findFirst(args);
  }
}
