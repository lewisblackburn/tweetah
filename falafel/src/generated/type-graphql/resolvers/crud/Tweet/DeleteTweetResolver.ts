import * as TypeGraphQL from "type-graphql";
import { DeleteTweetArgs } from "./args/DeleteTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class DeleteTweetResolver {
  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: true
  })
  async deleteTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.delete(args);
  }
}
