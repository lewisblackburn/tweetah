import * as TypeGraphQL from "type-graphql";
import { UpdateManyTweetArgs } from "./args/UpdateManyTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class UpdateManyTweetResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tweet.updateMany(args);
  }
}
