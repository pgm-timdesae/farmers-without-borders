import { Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFarmerInput, UpdateFarmerInput } from './dto';
import { Farmer } from './entities/farmer.entity';

@Injectable()
export class FarmersService {
  constructor(
    @InjectRepository(Farmer) private farmersRepository: Repository<Farmer>,
  ) {}

  @Get()
  async findAll(): Promise<Farmer[]> {
    return this.farmersRepository.find({
      relations: ['products'],
    }); // SELECT * FROM `farmers`
  }

  @Get(':id')
  async findOne(id: number): Promise<Farmer> {
    return this.farmersRepository.findOneOrFail({
      where: { id: id },
      relations: ['products'],
    }); // SELECT * FROM `farmers` WHERE `id` = id
  }

  @Post()
  async createFarmer(createFarmerInput: CreateFarmerInput): Promise<Farmer> {
    const farmer = this.farmersRepository.create(createFarmerInput); // newFarmer = new Farmer(); new name = input.name;

    return this.farmersRepository.save(farmer);
  }

  @Patch()
  async updateFarmer(updateFarmerInput: UpdateFarmerInput): Promise<Farmer> {
    const farmerId = await this.farmersRepository.findOne(updateFarmerInput.id);
    return await this.farmersRepository.save({
      ...farmerId,
      ...updateFarmerInput,
    });
  }

  @Delete(':id')
  async deleteFarmer(@Param('id') id: number) {
    const farmer = await this.farmersRepository.findOne(id);
    if (farmer) {
      await this.farmersRepository.remove(farmer);
      return id;
    } else {
      return null;
    }
  }
}
