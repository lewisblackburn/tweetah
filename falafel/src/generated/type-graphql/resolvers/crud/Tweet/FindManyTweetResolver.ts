import * as TypeGraphQL from "type-graphql";
import { FindManyTweetArgs } from "./args/FindManyTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class FindManyTweetResolver {
  @TypeGraphQL.Query(_returns => [Tweet], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTweetArgs): Promise<Tweet[]> {
    return getPrismaFromContext(ctx).tweet.findMany(args);
  }
}
