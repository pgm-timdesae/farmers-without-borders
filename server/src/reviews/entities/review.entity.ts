import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  rating: number;

  @Column()
  @Field()
  text: string;

  // @Column(({ type: 'timestamp' }))
  // createdOn: Date;

  //RELATIONSHIP
  @Column()
  @Field(() => Int)
  productId: number;

  // @Column()
  // @Field(type => Int)
  // userId: number;

  @ManyToOne(() => Product, (product) => product.reviews, { eager: true })
  @Field(() => Product)
  product: Product;
}
