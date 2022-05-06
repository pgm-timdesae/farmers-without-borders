import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { OrdersService } from '../orders/orders.service';
import { Payment } from './entities/payment.entity';
import { User } from '../users/entities/user.entity';
import { Order } from '../orders/entities/order.entity';
export declare class PaymentsService {
    private paymentsRepository;
    private usersService;
    private ordersService;
    constructor(paymentsRepository: Repository<Payment>, usersService: UsersService, ordersService: OrdersService);
    create(createPaymentInput: CreatePaymentInput): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    update(id: number, updatePaymentInput: UpdatePaymentInput): Promise<{
        id: number;
        method: string;
        userId: number;
        orderId: number;
        order: Order;
        user: User;
    } & Payment>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getUser(userId: number): Promise<User>;
    getOrder(orderId: number): Promise<Order>;
}
