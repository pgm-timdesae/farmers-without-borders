import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FarmersResolver } from './farmers.resolver';
import { FarmersService } from './farmers.service';
import { Farmer } from './entities/farmer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farmer])],
  providers: [FarmersService, FarmersResolver],
  exports: [FarmersService],
})
export class FarmersModule {}
