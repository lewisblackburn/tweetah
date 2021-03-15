import * as TypeGraphQL from "type-graphql";
import { FindUniqueLikesOnTweetsArgs } from "./args/FindUniqueLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class FindUniqueLikesOnTweetsResolver {
  @TypeGraphQL.Query(_returns => LikesOnTweets, {
    nullable: true
  })
  async findUniqueLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.findUnique(args);
  }
}
