import * as TypeGraphQL from "type-graphql";
import { Like } from "../../../models/Like";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { LikePostsArgs } from "./args/LikePostsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Like)
export class LikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [LikesOnPosts], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() like: Like, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LikePostsArgs): Promise<LikesOnPosts[]> {
    return getPrismaFromContext(ctx).like.findUnique({
      where: {
        id: like.id,
      },
    }).posts(args);
  }
}
