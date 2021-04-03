import * as TypeGraphQL from "type-graphql";
import { UpdateTweetArgs } from "./args/UpdateTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class UpdateTweetResolver {
  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: true
  })
  async updateTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.update(args);
  }
}
