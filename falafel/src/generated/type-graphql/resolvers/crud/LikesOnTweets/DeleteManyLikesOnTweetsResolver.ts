import * as TypeGraphQL from "type-graphql";
import { DeleteManyLikesOnTweetsArgs } from "./args/DeleteManyLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class DeleteManyLikesOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLikesOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnTweets.deleteMany(args);
  }
}
