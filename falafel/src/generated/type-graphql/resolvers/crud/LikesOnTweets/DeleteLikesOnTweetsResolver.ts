import * as TypeGraphQL from "type-graphql";
import { DeleteLikesOnTweetsArgs } from "./args/DeleteLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class DeleteLikesOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: true
  })
  async deleteLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.delete(args);
  }
}
