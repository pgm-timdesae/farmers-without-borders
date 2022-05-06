import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { OrdersService } from '../orders/orders.service';
import { Payment } from './entities/payment.entity';
import { User } from '../users/entities/user.entity';
import { Order } from '../orders/entities/order.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
    private usersService: UsersService,
    private ordersService: OrdersService,
  ) {}
  async create(createPaymentInput: CreatePaymentInput): Promise<Payment> {
    const newPayment = this.paymentsRepository.create(createPaymentInput);
    return this.paymentsRepository.save(newPayment);
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentsRepository.find();
  }

  async findOne(id: number): Promise<Payment> {
    return this.paymentsRepository.findOneOrFail(id);
  }

  async update(id: number, updatePaymentInput: UpdatePaymentInput) {
    const payment = await this.paymentsRepository.findOne(id);
    return this.paymentsRepository.save({ ...payment, ...updatePaymentInput });
  }

  async remove(id: number) {
    return this.paymentsRepository.delete(id);
  }

  getUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);
  }

  getOrder(orderId: number): Promise<Order> {
    return this.ordersService.findOne(orderId);
  }
}
