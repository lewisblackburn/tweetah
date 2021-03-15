import * as TypeGraphQL from "type-graphql";
import { UpdateRetweetArgs } from "./args/UpdateRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class UpdateRetweetResolver {
  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: true
  })
  async updateRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.update(args);
  }
}
