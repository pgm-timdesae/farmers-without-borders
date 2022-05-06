import { Category } from '../../categories/entities/category.entity';
import { Farmer } from '../../farmers/entities/farmer.entity';
import { Order } from '../../orders/entities/order.entity';
import { Review } from '../../reviews/entities/review.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    categoryId: number;
    farmerId: number;
    category: Category;
    farmer: Farmer;
    reviews: Review[];
    orders: Order[];
}
