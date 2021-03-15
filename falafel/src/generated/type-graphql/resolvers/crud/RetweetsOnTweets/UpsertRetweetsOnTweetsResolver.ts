import * as TypeGraphQL from "type-graphql";
import { UpsertRetweetsOnTweetsArgs } from "./args/UpsertRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class UpsertRetweetsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: false
  })
  async upsertRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRetweetsOnTweetsArgs): Promise<RetweetsOnTweets> {
    return getPrismaFromContext(ctx).retweetsOnTweets.upsert(args);
  }
}
