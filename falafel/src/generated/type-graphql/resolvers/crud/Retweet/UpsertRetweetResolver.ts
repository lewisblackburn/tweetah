import * as TypeGraphQL from "type-graphql";
import { UpsertRetweetArgs } from "./args/UpsertRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class UpsertRetweetResolver {
  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: false
  })
  async upsertRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRetweetArgs): Promise<Retweet> {
    return getPrismaFromContext(ctx).retweet.upsert(args);
  }
}
