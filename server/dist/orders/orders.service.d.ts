import { Repository } from 'typeorm';
import { CreateOrderInput, UpdateOrderInput } from './dto';
import { Order } from './entities/order.entity';
import { ProductsService } from 'src/products/products.service';
export declare class OrdersService {
    private ordersRepository;
    private productsService;
    constructor(ordersRepository: Repository<Order>, productsService: ProductsService);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    createOrder(createOrderInput: CreateOrderInput): Promise<Order>;
    updateOrder(updateOrderInput: UpdateOrderInput): Promise<Order>;
    deleteOrder(id: number): Promise<number>;
    addToOrder(orderId: number, productId: number): Promise<Order>;
    removeFromOrder(orderId: number, productId: number): Promise<Order>;
}
