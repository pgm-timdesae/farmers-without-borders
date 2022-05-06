import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Order } from '../../orders/entities/order.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 32 })
  @Field()
  method: string;

  @Column()
  @Field(() => Int)
  orderId: number;

  @ManyToOne(() => Order, (order) => order.payments)
  @Field(() => Order)
  order: Order;

  @Column()
  @Field(() => Int)
  userId: number;

  @ManyToOne(() => User, (user) => user.payments)
  @Field(() => User)
  user: User;
}
