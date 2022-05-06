import { Repository } from 'typeorm';
import { CreateReviewInput, UpdateReviewInput } from './dto';
import { Review } from './entities/review.entity';
import { Product } from '../products/entities/product.entity';
import { ProductsService } from '../products/products.service';
export declare class ReviewsService {
    private reviewsRepository;
    private productsService;
    constructor(reviewsRepository: Repository<Review>, productsService: ProductsService);
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    getProduct(productId: number): Promise<Product>;
    createReview(createReviewInput: CreateReviewInput): Promise<Review>;
    updateReview(updateReviewInput: UpdateReviewInput): Promise<Review>;
    deleteReview(id: number): Promise<number>;
}
