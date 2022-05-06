import { Order } from '../../orders/entities/order.entity';
import { User } from '../../users/entities/user.entity';
export declare class Payment {
    id: number;
    method: string;
    orderId: number;
    order: Order;
    userId: number;
    user: User;
}
