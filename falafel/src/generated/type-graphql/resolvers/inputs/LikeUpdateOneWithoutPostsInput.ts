import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutPostsInput } from "../inputs/LikeCreateOrConnectWithoutPostsInput";
import { LikeCreateWithoutPostsInput } from "../inputs/LikeCreateWithoutPostsInput";
import { LikeUpdateWithoutPostsInput } from "../inputs/LikeUpdateWithoutPostsInput";
import { LikeUpsertWithoutPostsInput } from "../inputs/LikeUpsertWithoutPostsInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => LikeCreateWithoutPostsInput, {
    nullable: true
  })
  create?: LikeCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: LikeUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LikeWhereUniqueInput, {
    nullable: true
  })
  connect?: LikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LikeUpdateWithoutPostsInput, {
    nullable: true
  })
  update?: LikeUpdateWithoutPostsInput | undefined;
}
