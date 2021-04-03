import * as TypeGraphQL from "type-graphql";
import { DeleteManyTweetArgs } from "./args/DeleteManyTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class DeleteManyTweetResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tweet.deleteMany(args);
  }
}
