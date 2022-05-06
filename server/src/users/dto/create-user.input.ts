import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @MaxLength(128)
  @IsNotEmpty()
  @IsAlphanumeric()
  @Field()
  username: string;

  @MaxLength(128)
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @MaxLength(1024)
  @IsNotEmpty()
  @Field()
  password: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true })
  profileId: number;
}
