import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Payment } from '../../payments/entities/payment.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  status: string;

  @OneToMany(() => Payment, (payment) => payment.order)
  @Field(() => [Payment])
  payments: Payment[];

  @Column()
  @Field(() => Int)
  total: number;

  @ManyToMany(() => Product, (product) => product.orders, { eager: true })
  @Field(() => [Product])
  @JoinTable({
    name: 'order_product', // table name for the junction table of this relation
    joinColumn: {
      name: 'orderId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'productId',
      referencedColumnName: 'id',
    },
  })
  products: Product[];
}
