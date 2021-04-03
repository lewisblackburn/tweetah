import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTweetArgs } from "./args/AggregateTweetArgs";
import { CreateTweetArgs } from "./args/CreateTweetArgs";
import { DeleteManyTweetArgs } from "./args/DeleteManyTweetArgs";
import { DeleteTweetArgs } from "./args/DeleteTweetArgs";
import { FindFirstTweetArgs } from "./args/FindFirstTweetArgs";
import { FindManyTweetArgs } from "./args/FindManyTweetArgs";
import { FindUniqueTweetArgs } from "./args/FindUniqueTweetArgs";
import { UpdateManyTweetArgs } from "./args/UpdateManyTweetArgs";
import { UpdateTweetArgs } from "./args/UpdateTweetArgs";
import { UpsertTweetArgs } from "./args/UpsertTweetArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Tweet } from "../../../models/Tweet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTweet } from "../../outputs/AggregateTweet";

@TypeGraphQL.Resolver(_of => Tweet)
export class TweetCrudResolver {
  @TypeGraphQL.Query(_returns => Tweet, {
    nullable: true
  })
  async tweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Tweet, {
    nullable: true
  })
  async findFirstTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Tweet], {
    nullable: false
  })
  async tweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTweetArgs): Promise<Tweet[]> {
    return getPrismaFromContext(ctx).tweet.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: false
  })
  async createTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTweetArgs): Promise<Tweet> {
    return getPrismaFromContext(ctx).tweet.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: true
  })
  async deleteTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: true
  })
  async updateTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTweetArgs): Promise<Tweet | null> {
    return getPrismaFromContext(ctx).tweet.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tweet.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tweet.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Tweet, {
    nullable: false
  })
  async upsertTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTweetArgs): Promise<Tweet> {
    return getPrismaFromContext(ctx).tweet.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateTweet, {
    nullable: false
  })
  async aggregateTweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTweetArgs): Promise<AggregateTweet> {
    return getPrismaFromContext(ctx).tweet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
