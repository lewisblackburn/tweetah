import * as TypeGraphQL from "type-graphql";
import { UpdateLikesOnTweetsArgs } from "./args/UpdateLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class UpdateLikesOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: true
  })
  async updateLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.update(args);
  }
}
