import { InputType, Field } from '@nestjs/graphql';
import { IsDate, IsInt, IsOptional, MaxLength } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @MaxLength(128)
  @IsOptional()
  @Field({ nullable: true })
  firstName: string;

  @MaxLength(128)
  @IsOptional()
  @Field({ nullable: true })
  lastName: string;

  @MaxLength(512)
  @IsOptional()
  @Field({ nullable: true })
  profilePicture: string;

  @MaxLength(8)
  @IsOptional()
  @Field({ nullable: true })
  gender: string;

  @IsDate()
  @IsOptional()
  @Field({ nullable: true })
  birthday: string;

  @MaxLength(128)
  @IsOptional()
  @Field({ nullable: true })
  street: string;

  @MaxLength(16)
  @IsOptional()
  @Field({ nullable: true })
  houseNumber: string;

  @MaxLength(16)
  @IsOptional()
  @Field({ nullable: true })
  zipCode: string;

  @MaxLength(4)
  @IsOptional()
  @Field({ nullable: true })
  country: string;

  @IsInt()
  @IsOptional()
  @Field({ nullable: true })
  telephoneNumber: number;
}
