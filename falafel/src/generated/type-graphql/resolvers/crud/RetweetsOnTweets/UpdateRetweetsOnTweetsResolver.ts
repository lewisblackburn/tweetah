import * as TypeGraphQL from "type-graphql";
import { UpdateRetweetsOnTweetsArgs } from "./args/UpdateRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class UpdateRetweetsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async updateRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.update(args);
  }
}
