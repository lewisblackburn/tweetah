import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumUserRoleFilter {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  equals?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  in?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [UserRole], {
    nullable: true
  })
  notIn?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumUserRoleFilter, {
    nullable: true
  })
  not?: NestedEnumUserRoleFilter | undefined;
}
