import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CategoriesModule } from '../categories/categories.module';
import { FarmersModule } from '../farmers/farmers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoriesModule,
    FarmersModule,
  ],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService],
})
export class ProductsModule {}
