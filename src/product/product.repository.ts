import { Repository } from 'typeorm';
import { Product } from './product.entity';

import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductRepository extends Repository<Product> {
  async createProduct(productDto: ProductDto): Promise<Product> {
    const { name, description, price } = productDto;

    return this.save({
      name,
      description,
      price,
    });
  }
}
