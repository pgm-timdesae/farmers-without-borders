import { Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { CreateProductInput, UpdateProductInput } from './dto';
import { Category } from '../categories/entities/category.entity';
import { CategoriesService } from '../categories/categories.service';
import { Farmer } from '../farmers/entities/farmer.entity';
import { FarmersService } from '../farmers/farmers.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    private categoriesService: CategoriesService,
    private farmersService: FarmersService,
  ) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['orders', 'reviews'],
    }); // SELECT * FROM `products`
  }

  @Get(':id')
  async findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneOrFail({
      where: { id: id },
      relations: ['orders', 'reviews'],
    }); // SELECT * FROM `products` WHERE `id` = id
  }

  @Get(':categoryId')
  async getCategory(categoryId: number): Promise<Category> {
    return this.categoriesService.findOne(categoryId);
  }

  @Get(':farmerId')
  async getFarmer(farmerId: number): Promise<Farmer> {
    return this.farmersService.findOne(farmerId);
  }

  @Get(':name')
  getSpecificProducts(name: string): Promise<Product[]> {
    // Similar to LIKE in SQL, Like is imported from the typeorm library
    return this.productsRepository.find({
      where: { name: Like(`%${name}%`) },
      relations: ['orders', 'reviews'],
    });
  }

  @Post()
  async createProduct(
    createProductInput: CreateProductInput,
  ): Promise<Product> {
    const product = this.productsRepository.create(createProductInput); // newProduct = new Product(); new name = input.name;
    return this.productsRepository.save(product);
  }

  @Patch()
  async updateProduct(
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    const productId = await this.productsRepository.findOne(
      updateProductInput.id,
    );
    return await this.productsRepository.save({
      ...productId,
      ...updateProductInput,
    });
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    const product = await this.productsRepository.findOne(id);
    if (product) {
      await this.productsRepository.remove(product);
      return id;
    } else {
      return null;
    }
  }
}
