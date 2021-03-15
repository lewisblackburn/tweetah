import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLikesOnTweetsArgs } from "./args/AggregateLikesOnTweetsArgs";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { AggregateLikesOnTweets } from "../../outputs/AggregateLikesOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class AggregateLikesOnTweetsResolver {
  @TypeGraphQL.Query(_returns => AggregateLikesOnTweets, {
    nullable: false
  })
  async aggregateLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLikesOnTweetsArgs): Promise<AggregateLikesOnTweets> {
    return getPrismaFromContext(ctx).likesOnTweets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
