import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Profile {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 128, nullable: true })
  @Field({ nullable: true })
  firstName: string;

  @Column('varchar', { length: 128, nullable: true })
  @Field({ nullable: true })
  lastName: string;

  @Column('varchar', { length: 512, nullable: true })
  @Field({ nullable: true })
  profilePicture: string;

  @Column('varchar', { length: 8, nullable: true })
  @Field({ nullable: true })
  gender: string;

  @Column('date', { nullable: true })
  @Field({ nullable: true })
  birthday: string;

  @Column('varchar', { length: 128, nullable: true })
  @Field({ nullable: true })
  street: string;

  @Column('varchar', { length: 16, nullable: true })
  @Field({ nullable: true })
  houseNumber: string;

  @Column('varchar', { length: 16, nullable: true })
  @Field({ nullable: true })
  zipCode: string;

  @Column('varchar', { length: 4, nullable: true })
  @Field({ nullable: true })
  country: string;

  @Column('int', { nullable: true })
  @Field({ nullable: true })
  telephoneNumber: number;

  @OneToOne(() => User, (user) => user.profile)
  @Field(() => User)
  user: User;
}
