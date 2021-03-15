import * as TypeGraphQL from "type-graphql";
import { Retweet } from "../../../models/Retweet";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { RetweetTweetsArgs } from "./args/RetweetTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class RetweetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [RetweetsOnTweets], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Root() retweet: Retweet, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RetweetTweetsArgs): Promise<RetweetsOnTweets[]> {
    return getPrismaFromContext(ctx).retweet.findUnique({
      where: {
        id: retweet.id,
      },
    }).tweets(args);
  }
}
