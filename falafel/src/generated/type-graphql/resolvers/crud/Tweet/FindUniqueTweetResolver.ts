import * as TypeGraphQL from "type-graphql";
import { FindUniqueTweetArgs } from "./args/FindUniqueTweetArgs";
import { Tweet } from "../../../models/Tweet";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tweet)
export class FindUniqueTweetResolver {
  @TypeGraphQL.Query(_returns => Tweet, {
    nullable: true
  })
  async tweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.findUnique(args);
  }
}
