import { CreateOrderInput, UpdateOrderInput } from './dto';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';
export declare class OrdersResolver {
    private ordersService;
    constructor(ordersService: OrdersService);
    orders(): Promise<Order[]>;
    getOrder(id: number): Promise<Order>;
    createOrder(createOrderInput: CreateOrderInput): Promise<Order>;
    updateOrder(updateOrderInput: UpdateOrderInput): Promise<Order>;
    deleteOrder(id: number): Promise<number>;
    addToOrder(orderId: number, productId: number): Promise<Order>;
    removeFromOrder(orderId: number, productId: number): Promise<Order>;
}
