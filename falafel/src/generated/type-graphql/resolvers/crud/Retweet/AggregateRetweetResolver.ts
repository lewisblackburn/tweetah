import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRetweetArgs } from "./args/AggregateRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { AggregateRetweet } from "../../outputs/AggregateRetweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class AggregateRetweetResolver {
  @TypeGraphQL.Query(_returns => AggregateRetweet, {
    nullable: false
  })
  async aggregateRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRetweetArgs): Promise<AggregateRetweet> {
    return getPrismaFromContext(ctx).retweet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
