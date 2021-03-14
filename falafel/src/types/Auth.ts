import { IsEmail, IsString, Length, NotContains } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @Length(10, 16)
  password: string;
}

@InputType()
export class RegisterInput extends LoginInput {
  @IsString()
  @Length(2, 16)
  @NotContains("@")
  @Field()
  username: string;
}
