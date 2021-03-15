import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommentsOnTweetsArgs } from "./args/AggregateCommentsOnTweetsArgs";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { AggregateCommentsOnTweets } from "../../outputs/AggregateCommentsOnTweets";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class AggregateCommentsOnTweetsResolver {
  @TypeGraphQL.Query(_returns => AggregateCommentsOnTweets, {
    nullable: false
  })
  async aggregateCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommentsOnTweetsArgs): Promise<AggregateCommentsOnTweets> {
    return getPrismaFromContext(ctx).commentsOnTweets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
