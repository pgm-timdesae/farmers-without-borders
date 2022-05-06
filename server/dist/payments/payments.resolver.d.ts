import { PaymentsService } from './payments.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { User } from '../users/entities/user.entity';
import { Order } from '../orders/entities/order.entity';
export declare class PaymentsResolver {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createPayment(createPaymentInput: CreatePaymentInput): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    user(payment: Payment): Promise<User>;
    order(payment: Payment): Promise<Order>;
    updatePayment(updatePaymentInput: UpdatePaymentInput): Promise<{
        id: number;
        method: string;
        userId: number;
        orderId: number;
        order: Order;
        user: User;
    } & Payment>;
    removePayment(id: number): Promise<import("typeorm").DeleteResult>;
}
