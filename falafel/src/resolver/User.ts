import argon2 from "argon2";
import "reflect-metadata";
import {
  Arg,
  Args,
  Authorized,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { COOKIE_NAME } from "../constants";
import { FindManyUserArgs, User } from "../generated/type-graphql";
import { Context } from "../interfaces/context";
import { LoginInput, RegisterInput } from "../types/Auth";

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() ctx: Context) {
    if (ctx.req.session.userId === user.id) {
      return user.email;
    }
    return "";
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => User)
  follow(
    @Arg("userId", (type) => Int) userId: number,
    @Ctx() ctx: Context
  ): Promise<User> {
    if (userId === ctx.req.session.userId)
      throw new Error("you can't follow yourself");

    return ctx.prisma.user.update({
      where: {
        id: ctx.req.session.userId,
      },
      data: {
        following: {
          connect: { id: userId },
        },
      },
    });
  }

  @Authorized(["USER", "ADMIN"])
  @Query(() => [User], { nullable: false })
  async users(
    @Ctx() ctx: Context,
    @Args() args: FindManyUserArgs
  ): Promise<User[]> {
    return ctx.prisma.user.findMany(args);
  }

  @Mutation(() => User, {
    nullable: false,
  })
  async register(
    @Ctx() ctx: Context,
    @Args() data: RegisterInput
  ): Promise<User> {
    const alreadyExists = await ctx.prisma.user.findFirst({
      where: {
        OR: [
          {
            username: data.username,
          },
          {
            email: data.email,
          },
        ],
      },
    });

    if (alreadyExists) throw new Error("username or email already exists");

    const hashedPassword = await argon2.hash(data.password);
    const user = await ctx.prisma.user.create({
      data: {
        displayname: data.displayname,
        email: data.email,
        username: data.username,
        password: hashedPassword,
      },
    });

    if (user) {
      ctx.req.session.userId = user.id;
      ctx.req.session.role = user.role;
    }

    return user;
  }

  @Mutation(() => User)
  async login(
    @Arg("data") data: LoginInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    const user = await ctx.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new Error("that user does not exist");
    const valid = await argon2.verify(user!.password, data.password);
    if (!valid) throw new Error("incorrect password");

    ctx.req.session.userId = user.id;
    ctx.req.session.role = user.role;

    return user;
  }

  @Authorized(["USER", "ADMIN"])
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: Context): Promise<Boolean> {
    return new Promise((resolve) =>
      ctx.req.session.destroy((err: any) => {
        ctx.res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }

  @Query(() => User, { nullable: true })
  async user(
    @Arg("username", (type) => String) username: string,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.user.findUnique({
      where: { username },
    });
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: Context): Promise<User | null> {
    if (!ctx.req.session.userId) {
      return null;
    }

    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.req.session.userId,
      },
    });
  }
}
