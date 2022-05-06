import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Product } from '../../products/entities/product.entity';

@Entity()
@ObjectType()
export class Farmer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  company: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  bio: string;

  @Column()
  @Field()
  logo: string;

  @Column()
  @Field()
  website: string;

  @OneToMany(() => Product, (product) => product.farmer)
  @Field(() => [Product])
  products: Product[];
}
