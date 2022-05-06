import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PaymentsService } from './payments.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { User } from '../users/entities/user.entity';
import { Order } from '../orders/entities/order.entity';

@Resolver(() => Payment)
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Mutation(() => Payment)
  createPayment(
    @Args('createPaymentInput') createPaymentInput: CreatePaymentInput,
  ) {
    return this.paymentsService.create(createPaymentInput);
  }

  @Query(() => [Payment], { name: 'payments' })
  findAll() {
    return this.paymentsService.findAll();
  }

  @Query(() => Payment, { name: 'payment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paymentsService.findOne(id);
  }

  @ResolveField(() => User)
  user(@Parent() payment: Payment): Promise<User> {
    return this.paymentsService.getUser(payment.userId);
  }

  @ResolveField(() => Order)
  order(@Parent() payment: Payment): Promise<Order> {
    return this.paymentsService.getOrder(payment.orderId);
  }

  @Mutation(() => Payment)
  updatePayment(
    @Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput,
  ) {
    return this.paymentsService.update(
      updatePaymentInput.id,
      updatePaymentInput,
    );
  }

  @Mutation(() => Payment)
  removePayment(@Args('id', { type: () => Int }) id: number) {
    return this.paymentsService.remove(id);
  }
}
