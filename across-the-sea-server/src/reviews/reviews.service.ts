import { InjectRepository } from '@nestjs/typeorm';
import { Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateReviewInput, UpdateReviewInput } from './dto';
import { Review } from './entities/review.entity';
import { Product } from '../products/entities/product.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review) private reviewsRepository: Repository<Review>,
    private productsService: ProductsService,
  ) {}

  @Get()
  async findAll(): Promise<Review[]> {
    return this.reviewsRepository.find();
  }

  @Get(':id')
  async findOne(id: number): Promise<Review> {
    return this.reviewsRepository.findOneOrFail(id);
  }

  @Get(':productId')
  async getProduct(productId: number): Promise<Product> {
    return this.productsService.findOne(productId);
  }

  @Post()
  async createReview(createReviewInput: CreateReviewInput): Promise<Review> {
    const review = this.reviewsRepository.create(createReviewInput);

    return this.reviewsRepository.save(review);
  }

  @Patch(':id')
  async updateReview(updateReviewInput: UpdateReviewInput): Promise<Review> {
    const reviewId = await this.reviewsRepository.findOne(updateReviewInput.id);
    return await this.reviewsRepository.save({
      ...reviewId,
      ...updateReviewInput,
    });
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: number) {
    const review = await this.reviewsRepository.findOne(id);
    if (review) {
      await this.reviewsRepository.remove(review);
      return id;
    } else {
      return null;
    }
  }
}
