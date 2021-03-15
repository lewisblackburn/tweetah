import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRetweetsOnTweetsArgs } from "./args/AggregateRetweetsOnTweetsArgs";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { AggregateRetweetsOnTweets } from "../../outputs/AggregateRetweetsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class AggregateRetweetsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => AggregateRetweetsOnTweets, {
    nullable: false
  })
  async aggregateRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRetweetsOnTweetsArgs): Promise<AggregateRetweetsOnTweets> {
    return getPrismaFromContext(ctx).retweetsOnTweets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
