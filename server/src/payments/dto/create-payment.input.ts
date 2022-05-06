import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, MaxLength } from 'class-validator';

@InputType()
export class CreatePaymentInput {
  @MaxLength(32)
  @Field()
  method: string;

  @IsNumber()
  @Field(() => Int)
  userId: number;

  @IsNumber()
  @Field(() => Int)
  orderId: number;
}
