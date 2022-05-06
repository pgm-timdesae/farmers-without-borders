import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Category } from '../../categories/entities/category.entity';
import { Farmer } from '../../farmers/entities/farmer.entity';
import { Order } from '../../orders/entities/order.entity';
import { Review } from '../../reviews/entities/review.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((tye) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  image: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  categoryId: number;

  @Column()
  @Field(() => Int)
  farmerId: number;

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @Field(() => Category)
  category: Category;

  @ManyToOne(() => Farmer, (farmer) => farmer.products, { eager: true })
  @Field(() => Farmer)
  farmer: Farmer;

  @OneToMany(() => Review, (review) => review.product)
  @Field(() => [Review])
  reviews: Review[];

  @ManyToMany(() => Order, (order) => order.products)
  @Field(() => [Order], { nullable: true })
  orders: Order[];
}
