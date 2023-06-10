import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Task } from '../../tasks/task.entity';

import { GetTasksFilterDto } from '../../tasks/dto/get-tasks-filter.dto';
@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {
    super(Task, taskRepo.manager);
  }

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');
    if (status) {
      query.andWhere('task.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        'LOWER(task.title) ILIKE LOWER(:search) OR LOWER(task.description) ILIKE LOWER(:search)',
        {
          search: `%${search}%`,
        },
      );
    }
    return await query.getMany();
  }
}
