import {
  Args,
  Mutation,
  Query,
  Resolver,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';

import { CreateFarmerInput, UpdateFarmerInput } from './dto';
import { Farmer } from './entities/farmer.entity';
import { FarmersService } from './farmers.service';

@Resolver((of) => Farmer)
export class FarmersResolver {
  // Constructor
  constructor(private farmersService: FarmersService) {}

  // Get all farmers
  @Query(() => [Farmer])
  farmers(): Promise<Farmer[]> {
    return this.farmersService.findAll();
  }

  // Get a specific farmer
  @Query(() => Farmer)
  getFarmer(@Args('id', { type: () => Int }) id: number): Promise<Farmer> {
    return this.farmersService.findOne(id);
  }

  // Create a new farmer
  @Mutation(() => Farmer)
  createFarmer(
    @Args('createFarmerInput') createFarmerInput: CreateFarmerInput,
  ): Promise<Farmer> {
    return this.farmersService.createFarmer(createFarmerInput);
  }

  // Update a specific farmer
  @Mutation(() => Farmer)
  updateFarmer(
    @Args('updateFarmerInput') updateFarmerInput: UpdateFarmerInput,
  ): Promise<Farmer> {
    return this.farmersService.updateFarmer(updateFarmerInput);
  }

  // Delete a specific farmer
  @Mutation(() => Farmer)
  deleteFarmer(@Args('id', { type: () => Int }) id: number) {
    return this.farmersService.deleteFarmer(id);
  }
}
