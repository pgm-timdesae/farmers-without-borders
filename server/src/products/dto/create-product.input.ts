import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

@InputType()
export class CreateProductInput {
  @IsAlphanumeric()
  @Field()
  name: string;

  @IsString()
  @Field()
  description: string;

  @IsString()
  @Field()
  image: string;

  @IsPositive()
  @IsNumber()
  @Field(() => Int)
  price: number;

  @IsInt()
  @Field(() => Int)
  categoryId: number;

  @IsInt()
  @Field(() => Int)
  farmerId: number;
}
