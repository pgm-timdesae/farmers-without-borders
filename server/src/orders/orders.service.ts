import { Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderInput, UpdateOrderInput } from './dto';
import { Order } from './entities/order.entity';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
    private productsService: ProductsService,
  ) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find(); // SELECT * order
  }

  @Get('id')
  findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOneOrFail(id);
  }

  @Post()
  createOrder(createOrderInput: CreateOrderInput): Promise<Order> {
    const newOrder = this.ordersRepository.create(createOrderInput); // NewOrder = new Order(); new.name = input.name = input.name
    return this.ordersRepository.save(newOrder); // insert in db
  }

  @Patch(':id')
  async updateOrder(updateOrderInput: UpdateOrderInput): Promise<Order> {
    const orderId = await this.ordersRepository.findOne(updateOrderInput.id);
    return await this.ordersRepository.save({
      ...orderId,
      ...updateOrderInput,
    });
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number) {
    const order = await this.ordersRepository.findOne(id);
    if (order) {
      await this.ordersRepository.remove(order);
      return id;
    } else {
      return null;
    }
  }

  async addToOrder(orderId: number, productId: number): Promise<Order> {
    const foundOrder = await this.ordersRepository.findOne(
      { id: orderId },
      { relations: ['products'] },
    );
    const foundProduct = await this.productsService.findOne(productId);

    if (foundOrder && foundProduct) {
      foundOrder.products = foundOrder.products
        ? [...foundOrder.products, foundProduct]
        : [foundProduct];

      return this.ordersRepository.save(foundOrder);
    } else {
      throw new Error(`Finding order or product problem`);
    }
  }

  async removeFromOrder(orderId: number, productId: number): Promise<Order> {
    const foundOrder = await this.ordersRepository.findOne(
      { id: orderId },
      { relations: ['products'] },
    );
    const foundProduct = await this.productsService.findOne(productId);

    if (foundOrder && foundProduct) {
      foundOrder.products = foundOrder.products
        ? [...foundOrder.products.filter((f) => f.id != productId)]
        : [];

      return this.ordersRepository.save(foundOrder);
    } else {
      throw new Error(`Finding order or product problem`);
    }
  }
}
