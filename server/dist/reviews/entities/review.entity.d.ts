import { Product } from 'src/products/entities/product.entity';
export declare class Review {
    id: number;
    rating: number;
    text: string;
    productId: number;
    product: Product;
}
