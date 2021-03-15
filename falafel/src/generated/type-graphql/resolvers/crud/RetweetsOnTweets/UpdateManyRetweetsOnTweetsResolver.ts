import * as TypeGraphQL from "type-graphql";
import { UpdateManyRetweetsOnTweetsArgs } from "./args/UpdateManyRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class UpdateManyRetweetsOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRetweetsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweetsOnTweets.updateMany(args);
  }
}
