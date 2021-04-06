import * as TypeGraphQL from "type-graphql";
import { DeleteRetweetArgs } from "./args/DeleteRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class DeleteRetweetResolver {
  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: true
  })
  async deleteRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.delete(args);
  }
}
