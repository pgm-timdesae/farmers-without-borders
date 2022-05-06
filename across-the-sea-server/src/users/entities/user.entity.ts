import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Payment } from '../../payments/entities/payment.entity';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 128 })
  @Field()
  username: string;

  @Column('varchar', { length: 128, unique: true })
  @Field()
  email: string;

  @Column('varchar', { length: 64 })
  @Field()
  password: string;

  @Column()
  @Field(() => Int)
  profileId: number;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  @Field(() => Profile)
  profile: Profile;

  @OneToMany(() => Payment, (payment) => payment.user)
  @Field(() => [Payment])
  payments: Payment[];
}
