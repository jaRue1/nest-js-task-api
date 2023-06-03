import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './dto/product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly products: Repository<Product>,
    private productRepository: ProductRepository,
  ) {}
  async createProduct(productDto: ProductDto): Promise<Product> {
    return await this.productRepository.createProduct(productDto);
  }
}
