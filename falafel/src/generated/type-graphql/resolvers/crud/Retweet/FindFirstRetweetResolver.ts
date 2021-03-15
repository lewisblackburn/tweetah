import * as TypeGraphQL from "type-graphql";
import { FindFirstRetweetArgs } from "./args/FindFirstRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class FindFirstRetweetResolver {
  @TypeGraphQL.Query(_returns => Retweet, {
    nullable: true
  })
  async findFirstRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.findFirst(args);
  }
}
