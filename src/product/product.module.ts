import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository, Product])],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
