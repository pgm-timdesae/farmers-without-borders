import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDate,
  IsInt,
  IsPositive,
  Max,
  Min,
} from 'class-validator';

@InputType()
export class CreateReviewInput {
  @IsPositive()
  @Min(1)
  @Max(5)
  @Field(() => Int)
  rating: number;

  @IsAlphanumeric()
  @Field()
  text: string;

  // @IsDate()
  // createdOn: Date;

  @IsInt()
  @Field(() => Int)
  productId: number;
}
