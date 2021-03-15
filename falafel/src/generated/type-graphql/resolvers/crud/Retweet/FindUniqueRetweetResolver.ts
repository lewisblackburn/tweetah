import * as TypeGraphQL from "type-graphql";
import { FindUniqueRetweetArgs } from "./args/FindUniqueRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class FindUniqueRetweetResolver {
  @TypeGraphQL.Query(_returns => Retweet, {
    nullable: true
  })
  async retweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.findUnique(args);
  }
}
