import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLikesOnPostsArgs } from "./args/AggregateLikesOnPostsArgs";
import { CreateLikesOnPostsArgs } from "./args/CreateLikesOnPostsArgs";
import { DeleteLikesOnPostsArgs } from "./args/DeleteLikesOnPostsArgs";
import { DeleteManyLikesOnPostsArgs } from "./args/DeleteManyLikesOnPostsArgs";
import { FindFirstLikesOnPostsArgs } from "./args/FindFirstLikesOnPostsArgs";
import { FindManyLikesOnPostsArgs } from "./args/FindManyLikesOnPostsArgs";
import { FindUniqueLikesOnPostsArgs } from "./args/FindUniqueLikesOnPostsArgs";
import { UpdateLikesOnPostsArgs } from "./args/UpdateLikesOnPostsArgs";
import { UpdateManyLikesOnPostsArgs } from "./args/UpdateManyLikesOnPostsArgs";
import { UpsertLikesOnPostsArgs } from "./args/UpsertLikesOnPostsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { LikesOnPosts } from "../../../models/LikesOnPosts";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLikesOnPosts } from "../../outputs/AggregateLikesOnPosts";

@TypeGraphQL.Resolver(_of => LikesOnPosts)
export class LikesOnPostsCrudResolver {
  @TypeGraphQL.Query(_returns => LikesOnPosts, {
    nullable: true
  })
  async findUniqueLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => LikesOnPosts, {
    nullable: true
  })
  async findFirstLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [LikesOnPosts], {
    nullable: false
  })
  async findManyLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLikesOnPostsArgs): Promise<LikesOnPosts[]> {
    return getPrismaFromContext(ctx).likesOnPosts.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: false
  })
  async createLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLikesOnPostsArgs): Promise<LikesOnPosts> {
    return getPrismaFromContext(ctx).likesOnPosts.create(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: true
  })
  async deleteLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: true
  })
  async updateLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLikesOnPostsArgs): Promise<LikesOnPosts | null> {
    return getPrismaFromContext(ctx).likesOnPosts.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLikesOnPostsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnPosts.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLikesOnPostsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnPosts.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnPosts, {
    nullable: false
  })
  async upsertLikesOnPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLikesOnPostsArgs): Promise<LikesOnPosts> {
    return getPrismaFromContext(ctx).likesOnPosts.upsert(args);
  }

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
