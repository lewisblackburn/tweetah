import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRetweetsOnTweetsArgs } from "./args/AggregateRetweetsOnTweetsArgs";
import { CreateRetweetsOnTweetsArgs } from "./args/CreateRetweetsOnTweetsArgs";
import { DeleteManyRetweetsOnTweetsArgs } from "./args/DeleteManyRetweetsOnTweetsArgs";
import { DeleteRetweetsOnTweetsArgs } from "./args/DeleteRetweetsOnTweetsArgs";
import { FindFirstRetweetsOnTweetsArgs } from "./args/FindFirstRetweetsOnTweetsArgs";
import { FindManyRetweetsOnTweetsArgs } from "./args/FindManyRetweetsOnTweetsArgs";
import { FindUniqueRetweetsOnTweetsArgs } from "./args/FindUniqueRetweetsOnTweetsArgs";
import { UpdateManyRetweetsOnTweetsArgs } from "./args/UpdateManyRetweetsOnTweetsArgs";
import { UpdateRetweetsOnTweetsArgs } from "./args/UpdateRetweetsOnTweetsArgs";
import { UpsertRetweetsOnTweetsArgs } from "./args/UpsertRetweetsOnTweetsArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { RetweetsOnTweets } from "../../../models/RetweetsOnTweets";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRetweetsOnTweets } from "../../outputs/AggregateRetweetsOnTweets";

@TypeGraphQL.Resolver(_of => RetweetsOnTweets)
export class RetweetsOnTweetsCrudResolver {
  @TypeGraphQL.Query(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async findUniqueRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async findFirstRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [RetweetsOnTweets], {
    nullable: false
  })
  async findManyRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRetweetsOnTweetsArgs): Promise<RetweetsOnTweets[]> {
    return getPrismaFromContext(ctx).retweetsOnTweets.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: false
  })
  async createRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRetweetsOnTweetsArgs): Promise<RetweetsOnTweets> {
    return getPrismaFromContext(ctx).retweetsOnTweets.create(args);
  }

  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async deleteRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: true
  })
  async updateRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRetweetsOnTweetsArgs): Promise<RetweetsOnTweets | null> {
    return getPrismaFromContext(ctx).retweetsOnTweets.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRetweetsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweetsOnTweets.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRetweetsOnTweetsArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweetsOnTweets.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => RetweetsOnTweets, {
    nullable: false
  })
  async upsertRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRetweetsOnTweetsArgs): Promise<RetweetsOnTweets> {
    return getPrismaFromContext(ctx).retweetsOnTweets.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRetweetsOnTweets, {
    nullable: false
  })
  async aggregateRetweetsOnTweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRetweetsOnTweetsArgs): Promise<AggregateRetweetsOnTweets> {
    return getPrismaFromContext(ctx).retweetsOnTweets.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
