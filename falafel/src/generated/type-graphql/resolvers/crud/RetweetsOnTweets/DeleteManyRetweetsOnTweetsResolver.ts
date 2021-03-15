import * as TypeGraphQL from "type-graphql";
import { DeleteManyRetweetsOnTweetsArgs } from "./args/DeleteManyRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class DeleteManyRetweetsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRetweetsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweetsOnTweets.deleteMany(args);
  }
}
