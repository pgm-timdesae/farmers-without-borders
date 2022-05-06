import { Payment } from '../../payments/entities/payment.entity';
import { Product } from '../../products/entities/product.entity';
export declare class Order {
    id: number;
    status: string;
    payments: Payment[];
    total: number;
    products: Product[];
}
