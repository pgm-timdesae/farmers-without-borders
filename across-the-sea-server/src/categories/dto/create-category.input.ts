import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsAlpha()
  @Field()
  name: string;

  @IsString()
  @Field()
  description: string;

  @IsAlpha()
  @Field()
  image: string;
}
