import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLikesOnPostsArgs } from "./args/AggregateLikesOnPostsArgs";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { AggregateLikesOnPosts } from "../../outputs/AggregateLikesOnPosts";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class AggregateLikesOnPostsResolver {
  @TypeGraphQL.Query(_returns => AggregateLikesOnPosts, {
    nullable: false
  })
  async aggregateLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLikesOnPostsArgs): Promise<AggregateLikesOnPosts> {
    return getPrismaFromContext(ctx).likesOnPosts.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
