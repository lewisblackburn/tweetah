import * as TypeGraphQL from "type-graphql";
import { DeleteRetweetsOnTweetsArgs } from "./args/DeleteRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class DeleteRetweetsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async deleteRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.delete(args);
  }
}
