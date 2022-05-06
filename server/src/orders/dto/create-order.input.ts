import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @IsString()
  @Field()
  status: string;

  @IsNumber()
  @Field()
  total: number;

  /* @IsDate()
    @Field()
    createdOn: string; */
}
