import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLikesOnTweetsArgs } from "./args/AggregateLikesOnTweetsArgs";
import { CreateLikesOnTweetsArgs } from "./args/CreateLikesOnTweetsArgs";
import { DeleteLikesOnTweetsArgs } from "./args/DeleteLikesOnTweetsArgs";
import { DeleteManyLikesOnTweetsArgs } from "./args/DeleteManyLikesOnTweetsArgs";
import { FindFirstLikesOnTweetsArgs } from "./args/FindFirstLikesOnTweetsArgs";
import { FindManyLikesOnTweetsArgs } from "./args/FindManyLikesOnTweetsArgs";
import { FindUniqueLikesOnTweetsArgs } from "./args/FindUniqueLikesOnTweetsArgs";
import { UpdateLikesOnTweetsArgs } from "./args/UpdateLikesOnTweetsArgs";
import { UpdateManyLikesOnTweetsArgs } from "./args/UpdateManyLikesOnTweetsArgs";
import { UpsertLikesOnTweetsArgs } from "./args/UpsertLikesOnTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { LikesOnTweets } from "../../../models/LikesOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLikesOnTweets } from "../../outputs/AggregateLikesOnTweets";

@TypeGraphQL.Resolver(_of => LikesOnTweets)
export class LikesOnTweetsCrudResolver {
  @TypeGraphQL.Query(_returns => LikesOnTweets, {
    nullable: true
  })
  async findUniqueLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => LikesOnTweets, {
    nullable: true
  })
  async findFirstLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [LikesOnTweets], {
    nullable: false
  })
  async findManyLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLikesOnTweetsArgs): Promise<LikesOnTweets[]> {
    return getPrismaFromContext(ctx).likesOnTweets.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: false
  })
  async createLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLikesOnTweetsArgs): Promise<LikesOnTweets> {
    return getPrismaFromContext(ctx).likesOnTweets.create(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: true
  })
  async deleteLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: true
  })
  async updateLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLikesOnTweetsArgs): Promise<LikesOnTweets | null> {
    return getPrismaFromContext(ctx).likesOnTweets.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLikesOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnTweets.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLikesOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).likesOnTweets.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => LikesOnTweets, {
    nullable: false
  })
  async upsertLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLikesOnTweetsArgs): Promise<LikesOnTweets> {
    return getPrismaFromContext(ctx).likesOnTweets.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateLikesOnTweets, {
    nullable: false
  })
  async aggregateLikesOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLikesOnTweetsArgs): Promise<AggregateLikesOnTweets> {
    return getPrismaFromContext(ctx).likesOnTweets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
