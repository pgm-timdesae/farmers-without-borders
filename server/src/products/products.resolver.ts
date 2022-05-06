import {
  Args,
  Mutation,
  Query,
  Resolver,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';

import { CreateProductInput, UpdateProductInput } from './dto';
import { Category } from '../categories/entities/category.entity';
import { Farmer } from '../farmers/entities/farmer.entity';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  // Constructor
  constructor(private productsService: ProductsService) {}

  // Get all products
  @Query(() => [Product])
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // Get a specific product
  @Query(() => Product)
  getProduct(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  // Get a specific product
  @Query(() => [Product])
  getSpecificProducts(
    @Args('name', { type: () => String }) name: string,
  ): Promise<Product[]> {
    return this.productsService.getSpecificProducts(name);
  }

  // Create a new product
  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductInput);
  }

  // Update a specific product
  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.updateProduct(updateProductInput);
  }

  // Delete a specific product
  @Mutation(() => Product)
  deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.deleteProduct(id);
  }

  @ResolveField(() => Farmer)
  category(@Parent() product: Product): Promise<Category> {
    return this.productsService.getCategory(product.categoryId);
  }

  @ResolveField(() => Farmer)
  farmer(@Parent() product: Product): Promise<Farmer> {
    return this.productsService.getFarmer(product.farmerId);
  }
}
