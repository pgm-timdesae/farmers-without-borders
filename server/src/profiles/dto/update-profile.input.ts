import { CreateProfileInput } from './create-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsDate, IsInt, IsOptional, MaxLength } from 'class-validator';

@InputType()
export class UpdateProfileInput extends PartialType(CreateProfileInput) {
  @Field(() => Int)
  id: number;
}
