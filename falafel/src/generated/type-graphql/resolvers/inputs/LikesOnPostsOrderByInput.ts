import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeOrderByInput } from "../inputs/LikeOrderByInput";
import { PostOrderByInput } from "../inputs/PostOrderByInput";
import { UserOrderByInput } from "../inputs/UserOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikesOnPostsOrderByInput {
  @TypeGraphQL.Field(_type => PostOrderByInput, {
    nullable: true
  })
  post?: PostOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByInput, {
    nullable: true
  })
  user?: UserOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LikeOrderByInput, {
    nullable: true
  })
  like?: LikeOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  likeId?: "asc" | "desc" | undefined;
}
