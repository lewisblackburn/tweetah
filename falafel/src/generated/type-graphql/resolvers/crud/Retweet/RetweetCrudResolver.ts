import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRetweetArgs } from "./args/AggregateRetweetArgs";
import { CreateRetweetArgs } from "./args/CreateRetweetArgs";
import { DeleteManyRetweetArgs } from "./args/DeleteManyRetweetArgs";
import { DeleteRetweetArgs } from "./args/DeleteRetweetArgs";
import { FindFirstRetweetArgs } from "./args/FindFirstRetweetArgs";
import { FindManyRetweetArgs } from "./args/FindManyRetweetArgs";
import { FindUniqueRetweetArgs } from "./args/FindUniqueRetweetArgs";
import { UpdateManyRetweetArgs } from "./args/UpdateManyRetweetArgs";
import { UpdateRetweetArgs } from "./args/UpdateRetweetArgs";
import { UpsertRetweetArgs } from "./args/UpsertRetweetArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Retweet } from "../../../models/Retweet";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRetweet } from "../../outputs/AggregateRetweet";

@TypeGraphQL.Resolver(_of => Retweet)
export class RetweetCrudResolver {
  @TypeGraphQL.Query(_returns => Retweet, {
    nullable: true
  })
  async retweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Retweet, {
    nullable: true
  })
  async findFirstRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Retweet], {
    nullable: false
  })
  async retweets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyRetweetArgs): Promise<Retweet[]> {
    return getPrismaFromContext(ctx).retweet.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: false
  })
  async createRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateRetweetArgs): Promise<Retweet> {
    return getPrismaFromContext(ctx).retweet.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: true
  })
  async deleteRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: true
  })
  async updateRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateRetweetArgs): Promise<Retweet | null> {
    return getPrismaFromContext(ctx).retweet.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyRetweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweet.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyRetweetArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).retweet.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Retweet, {
    nullable: false
  })
  async upsertRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertRetweetArgs): Promise<Retweet> {
    return getPrismaFromContext(ctx).retweet.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateRetweet, {
    nullable: false
  })
  async aggregateRetweet(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRetweetArgs): Promise<AggregateRetweet> {
    return getPrismaFromContext(ctx).retweet.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
