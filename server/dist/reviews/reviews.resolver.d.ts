import { ReviewsService } from './reviews.service';
import { Review } from './entities/review.entity';
import { CreateReviewInput, UpdateReviewInput } from './dto';
import { Product } from '../products/entities/product.entity';
export declare class ReviewsResolver {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    reviews(): Promise<Review[]>;
    getReview(id: number): Promise<Review>;
    createReview(createReviewInput: CreateReviewInput): Promise<Review>;
    updateReview(updateReviewInput: UpdateReviewInput): Promise<Review>;
    deleteReview(id: number): Promise<number>;
    product(review: Review): Promise<Product>;
}
