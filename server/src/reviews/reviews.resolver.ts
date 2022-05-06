import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';

import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput, UpdateReviewInput } from './dto';
import { Product } from '../products/entities/product.entity';

@Resolver((of) => Review)
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  // Get all reviews
  @Query(() => [Review])
  reviews(): Promise<Review[]> {
    return this.reviewsService.findAll();
  }

  // Get a specific review
  @Query(() => Review)
  getReview(@Args('id', { type: () => Int }) id: number): Promise<Review> {
    return this.reviewsService.findOne(id);
  }

  // Create a new review
  @Mutation(() => Review)
  createReview(
    @Args('createReviewInput') createReviewInput: CreateReviewInput,
  ): Promise<Review> {
    return this.reviewsService.createReview(createReviewInput);
  }

  // Update a specific review
  @Mutation(() => Review)
  updateReview(
    @Args('updateReviewInput') updateReviewInput: UpdateReviewInput,
  ): Promise<Review> {
    return this.reviewsService.updateReview(updateReviewInput);
  }

  // Delete a specific review
  @Mutation(() => Review)
  deleteReview(@Args('id', { type: () => Int }) id: number) {
    return this.reviewsService.deleteReview(id);
  }

  @ResolveField(() => Product)
  product(@Parent() review: Review): Promise<Product> {
    return this.reviewsService.getProduct(review.productId);
  }
}
