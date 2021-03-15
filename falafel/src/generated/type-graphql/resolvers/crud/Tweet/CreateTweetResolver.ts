import * as TypeGraphQL from "type-graphql";
import { CreateTweetArgs } from "./args/CreateTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class CreateTweetResolver {
  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: false
  })
  async createTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTweetArgs): Promise<Tweet> {
    return getPrismaFromContext(ctx).tweet.create(args);
  }
}
