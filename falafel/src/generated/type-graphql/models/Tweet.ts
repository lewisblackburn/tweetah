import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Like } from "../models/Like";
import { Retweet } from "../models/Retweet";
import { User } from "../models/User";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Tweet {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  comments?: Comment[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentAmount!: number;

  likes?: Like[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likeAmount!: number;

  retweets?: Retweet[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  retweetAmount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
