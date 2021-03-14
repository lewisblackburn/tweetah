import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LikesOnPosts } from "../models/LikesOnPosts";
import { Post } from "../models/Post";
import { UserRole } from "../enums/UserRole";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  password?: string;

  followedBy?: User[];

  following?: User[];

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  posts?: Post[];

  likes?: LikesOnPosts[];
}
