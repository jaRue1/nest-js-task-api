import {
  DeepPartial,
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';

export interface BaseInterfaceRepository<T> {
  create(data: DeepPartial<T>): T;
  createMany(data: DeepPartial<T>[]): T[];
  save(data: DeepPartial<T>): Promise<T>;
  saveMany(data: DeepPartial<T>[]): Promise<T[]>;
  findOneById(id: number): Promise<T>;
  findByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
  find(options: any): Promise<T[]>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  delete(options: FindOptionsWhere<T>): Promise<DeleteResult>;
  remove(data: T): Promise<T>;
  findWithRelations(relations: FindManyOptions<T>): Promise<T[]>;
  preload(entityLike: DeepPartial<T>): Promise<T>;
}
