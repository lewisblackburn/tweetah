import * as TypeGraphQL from "type-graphql";
import { UpdateManyRetweetArgs } from "./args/UpdateManyRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class UpdateManyRetweetResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRetweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweet.updateMany(args);
  }
}
