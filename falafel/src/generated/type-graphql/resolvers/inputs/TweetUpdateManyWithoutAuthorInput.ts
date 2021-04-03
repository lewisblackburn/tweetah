import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TweetCreateOrConnectWithoutAuthorInput } from "../inputs/TweetCreateOrConnectWithoutAuthorInput";
import { TweetCreateWithoutAuthorInput } from "../inputs/TweetCreateWithoutAuthorInput";
import { TweetScalarWhereInput } from "../inputs/TweetScalarWhereInput";
import { TweetUpdateManyWithWhereWithoutAuthorInput } from "../inputs/TweetUpdateManyWithWhereWithoutAuthorInput";
import { TweetUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/TweetUpdateWithWhereUniqueWithoutAuthorInput";
import { TweetUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/TweetUpsertWithWhereUniqueWithoutAuthorInput";
import { TweetWhereUniqueInput } from "../inputs/TweetWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TweetUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [TweetCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: TweetCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: TweetUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  connect?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  set?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetWhereUniqueInput], {
    nullable: true
  })
  delete?: TweetWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: TweetUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: TweetUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TweetScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TweetScalarWhereInput[] | undefined;
}
