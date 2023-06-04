import { Task } from './task.entity';
import { Injectable, Inject } from '@nestjs/common';
import { TaskStatus } from './tasks.status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from '../shared/repositories/task.repository';
@Injectable()
export class TasksService {
  constructor(
    @Inject('TaskRepositoryInterface')
    private readonly taskRepo: TaskRepository,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepo.findOneById(id);
    if (!found) {
      throw new Error('Task not found');
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.taskRepo.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.taskRepo.save(task);
    return task;
  }
}
