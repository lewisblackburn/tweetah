import * as TypeGraphQL from "type-graphql";
import { UpsertLikesOnTweetsArgs } from "./args/UpsertLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class UpsertLikesOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: false
  })
  async upsertLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLikesOnTweetsArgs): Promise<LikesOnTweets> {
    return getPrismaFromContext(ctx).likesOnTweets.upsert(args);
  }
}
