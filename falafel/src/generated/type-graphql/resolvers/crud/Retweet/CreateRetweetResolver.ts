import * as TypeGraphQL from "type-graphql";
import { CreateRetweetArgs } from "./args/CreateRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class CreateRetweetResolver {
  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: false
  })
  async createRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRetweetArgs): Promise<Retweet> {
    return getPrismaFromContext(ctx).retweet.create(args);
  }
}
