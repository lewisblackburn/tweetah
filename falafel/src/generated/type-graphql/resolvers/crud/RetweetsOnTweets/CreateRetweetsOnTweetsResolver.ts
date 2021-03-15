import * as TypeGraphQL from "type-graphql";
import { CreateRetweetsOnTweetsArgs } from "./args/CreateRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class CreateRetweetsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: false
  })
  async createRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRetweetsOnTweetsArgs): Promise<RetweetsOnTweets> {
    return getPrismaFromContext(ctx).retweetsOnTweets.create(args);
  }
}
