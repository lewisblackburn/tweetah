import * as TypeGraphQL from "type-graphql";
import { UpdateManyLikesOnTweetsArgs } from "./args/UpdateManyLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class UpdateManyLikesOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLikesOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnTweets.updateMany(args);
  }
}
