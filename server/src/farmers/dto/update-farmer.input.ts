import { CreateFarmerInput } from './create-farmer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFarmerInput extends PartialType(CreateFarmerInput) {
  @Field(() => Int)
  id: number;
}
