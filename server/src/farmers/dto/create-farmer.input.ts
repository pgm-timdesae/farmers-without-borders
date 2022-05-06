import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateFarmerInput {
  @IsAlpha()
  @MaxLength(25)
  @Field()
  company: string;

  @IsAlpha()
  @MaxLength(25)
  @Field()
  firstName: string;

  @IsAlpha()
  @MaxLength(25)
  @Field()
  lastName: string;

  @IsString()
  @Field()
  bio: string;

  @IsString()
  @Field()
  logo: string;

  @IsString()
  @Field()
  website: string;
}
