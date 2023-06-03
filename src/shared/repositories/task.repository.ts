import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Task } from '../../tasks/task.entity';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { TaskRepositoryInterface } from '../interfaces/task.repository.interface';

@Injectable()
export class TaskRepository
  extends BaseAbstractRepository<Task>
  implements TaskRepositoryInterface
{
  constructor(@InjectRepository(Task) taskRepository: Repository<Task>) {
    super(taskRepository);
  }
}
