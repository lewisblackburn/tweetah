import * as TypeGraphQL from "type-graphql";
import { CreateLikesOnTweetsArgs } from "./args/CreateLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class CreateLikesOnTweetsResolver {
  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: false
  })
  async createLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLikesOnTweetsArgs): Promise<LikesOnTweets> {
    return getPrismaFromContext(ctx).likesOnTweets.create(args);
  }
}
