import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateOrConnectWithoutTweetsInput } from "../inputs/LikeCreateOrConnectWithoutTweetsInput";
import { LikeCreateWithoutTweetsInput } from "../inputs/LikeCreateWithoutTweetsInput";
import { LikeUpdateWithoutTweetsInput } from "../inputs/LikeUpdateWithoutTweetsInput";
import { LikeUpsertWithoutTweetsInput } from "../inputs/LikeUpsertWithoutTweetsInput";
import { LikeWhereUniqueInput } from "../inputs/LikeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LikeUpdateOneWithoutTweetsInput {
  @TypeGraphQL.Field(_type => LikeCreateWithoutTweetsInput, {
    nullable: true
  })
  create?: LikeCreateWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => LikeCreateOrConnectWithoutTweetsInput, {
    nullable: true
  })
  connectOrCreate?: LikeCreateOrConnectWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => LikeUpsertWithoutTweetsInput, {
    nullable: true
  })
  upsert?: LikeUpsertWithoutTweetsInput | undefined;

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

  @TypeGraphQL.Field(_type => LikeUpdateWithoutTweetsInput, {
    nullable: true
  })
  update?: LikeUpdateWithoutTweetsInput | undefined;
}
