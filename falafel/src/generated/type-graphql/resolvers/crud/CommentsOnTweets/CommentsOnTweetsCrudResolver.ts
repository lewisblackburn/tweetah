import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCommentsOnTweetsArgs } from "./args/AggregateCommentsOnTweetsArgs";
import { CreateCommentsOnTweetsArgs } from "./args/CreateCommentsOnTweetsArgs";
import { DeleteCommentsOnTweetsArgs } from "./args/DeleteCommentsOnTweetsArgs";
import { DeleteManyCommentsOnTweetsArgs } from "./args/DeleteManyCommentsOnTweetsArgs";
import { FindFirstCommentsOnTweetsArgs } from "./args/FindFirstCommentsOnTweetsArgs";
import { FindManyCommentsOnTweetsArgs } from "./args/FindManyCommentsOnTweetsArgs";
import { FindUniqueCommentsOnTweetsArgs } from "./args/FindUniqueCommentsOnTweetsArgs";
import { UpdateCommentsOnTweetsArgs } from "./args/UpdateCommentsOnTweetsArgs";
import { UpdateManyCommentsOnTweetsArgs } from "./args/UpdateManyCommentsOnTweetsArgs";
import { UpsertCommentsOnTweetsArgs } from "./args/UpsertCommentsOnTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { CommentsOnTweets } from "../../../models/CommentsOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCommentsOnTweets } from "../../outputs/AggregateCommentsOnTweets";

@TypeGraphQL.Resolver(_of => CommentsOnTweets)
export class CommentsOnTweetsCrudResolver {
  @TypeGraphQL.Query(_returns => CommentsOnTweets, {
    nullable: true
  })
  async findUniqueCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => CommentsOnTweets, {
    nullable: true
  })
  async findFirstCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [CommentsOnTweets], {
    nullable: false
  })
  async findManyCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCommentsOnTweetsArgs): Promise<CommentsOnTweets[]> {
    return getPrismaFromContext(ctx).commentsOnTweets.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: false
  })
  async createCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCommentsOnTweetsArgs): Promise<CommentsOnTweets> {
    return getPrismaFromContext(ctx).commentsOnTweets.create(args);
  }

  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: true
  })
  async deleteCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: true
  })
  async updateCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCommentsOnTweetsArgs): Promise<CommentsOnTweets | null> {
    return getPrismaFromContext(ctx).commentsOnTweets.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCommentsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).commentsOnTweets.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCommentsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).commentsOnTweets.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => CommentsOnTweets, {
    nullable: false
  })
  async upsertCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertCommentsOnTweetsArgs): Promise<CommentsOnTweets> {
    return getPrismaFromContext(ctx).commentsOnTweets.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateCommentsOnTweets, {
    nullable: false
  })
  async aggregateCommentsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommentsOnTweetsArgs): Promise<AggregateCommentsOnTweets> {
    return getPrismaFromContext(ctx).commentsOnTweets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
