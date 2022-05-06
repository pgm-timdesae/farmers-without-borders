import {
  Args,
  Mutation,
  Query,
  Resolver,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';

import { CreateCategoryInput, UpdateCategoryInput } from './dto/';
import { Category } from './entities/category.entity';
import { CategoriesService } from './categories.service';

@Resolver((of) => Category)
export class CategoriesResolver {
  // Constructor
  constructor(private categoriesService: CategoriesService) {}

  // Get all categories
  @Query(() => [Category])
  categories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  // Get a specific category
  @Query(() => Category)
  getCategory(@Args('id', { type: () => Int }) id: number): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  // Create a new category
  @Mutation(() => Category)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryInput);
  }

  // Update a specific category
  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoriesService.updateCategory(updateCategoryInput);
  }

  // Delete a specific category
  @Mutation(() => Category)
  deleteCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.deleteCategory(id);
  }
}
