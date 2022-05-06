import { Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryInput, UpdateCategoryInput } from './dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>, // private ownersService: OwnerService,
  ) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find({ relations: ['products'] }); // SELECT * FROM `categories`
  }

  @Get(':id')
  async findOne(id: number): Promise<Category> {
    return this.categoriesRepository.findOneOrFail({
      where: { id: id },
      relations: ['products'],
    }); // SELECT * FROM `categories` WHERE `id` = id
  }

  @Post()
  async createCategory(
    createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    const category = this.categoriesRepository.create(createCategoryInput); // newCategory = new Category(); new name = input.name;
    return this.categoriesRepository.save(category);
  }

  @Patch()
  async updateCategory(
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    const categoryId = await this.categoriesRepository.findOne(
      updateCategoryInput.id,
    );
    return await this.categoriesRepository.save({
      ...categoryId,
      ...updateCategoryInput,
    });
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    const category = await this.categoriesRepository.findOne(id);
    if (category) {
      await this.categoriesRepository.remove(category);
      return id;
    } else {
      return null;
    }
  }
}
