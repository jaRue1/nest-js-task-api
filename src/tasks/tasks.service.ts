import { Task } from './dto/task.entity';
import { Injectable } from '@nestjs/common';
import { TaskStatus } from './tasks.status.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new Error('Task not found');
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.taskRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.taskRepository.save(task);
    return task;
  }
}
