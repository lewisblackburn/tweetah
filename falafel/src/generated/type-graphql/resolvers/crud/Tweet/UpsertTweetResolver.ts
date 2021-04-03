import * as TypeGraphQL from "type-graphql";
import { UpsertTweetArgs } from "./args/UpsertTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class UpsertTweetResolver {
  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: false
  })
  async upsertTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTweetArgs): Promise<Tweet> {
    return getPrismaFromContext(ctx).tweet.upsert(args);
  }
}
