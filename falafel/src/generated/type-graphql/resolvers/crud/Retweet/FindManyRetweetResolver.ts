import * as TypeGraphQL from "type-graphql";
import { FindManyRetweetArgs } from "./args/FindManyRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class FindManyRetweetResolver {
  @TypeGraphQL.Query(_returns => [Retweet], {
    nullable: false
  })
  async retweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRetweetArgs): Promise<Retweet[]> {
    return getPrismaFromContext(ctx).retweet.findMany(args);
  }
}
