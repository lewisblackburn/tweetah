import * as TypeGraphQL from "type-graphql";
import { DeleteManyRetweetArgs } from "./args/DeleteManyRetweetArgs";
import { Retweet } from "../../../models/Retweet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Retweet)
export class DeleteManyRetweetResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRetweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweet.deleteMany(args);
  }
}
