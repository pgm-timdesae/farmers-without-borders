import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { CreateOrderInput, UpdateOrderInput } from './dto';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Resolver((of) => Order)
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  // Get all orders
  @Query(() => [Order])
  orders(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  //Get a specific order
  @Query(() => Order)
  getOrder(@Args('id', { type: () => Int }) id: number): Promise<Order> {
    return this.ordersService.findOne(id);
  }

  // Create a new order
  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    return this.ordersService.createOrder(createOrderInput);
  }

  //update a specific order
  @Mutation(() => Order)
  updateOrder(
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ): Promise<Order> {
    return this.ordersService.updateOrder(updateOrderInput);
  }

  //Delete a specific order
  @Mutation(() => Order)
  deleteOrder(@Args('id', { type: () => Int }) id: number) {
    return this.ordersService.deleteOrder(id);
  }

  @Mutation(() => Order, { name: 'addProductToOrder' })
  addToOrder(
    @Args('orderId', { type: () => Int, nullable: false }) orderId: number,
    @Args('productId', { type: () => Int, nullable: false }) productId: number,
  ) {
    return this.ordersService.addToOrder(orderId, productId);
  }

  @Mutation(() => Order, { name: 'removeProductToOrder' })
  removeFromOrder(
    @Args('orderId', { type: () => Int, nullable: false }) orderId: number,
    @Args('productId', { type: () => Int, nullable: false }) productId: number,
  ) {
    return this.ordersService.removeFromOrder(orderId, productId);
  }
}
