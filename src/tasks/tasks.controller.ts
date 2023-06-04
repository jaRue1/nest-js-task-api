import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';

@Controller('v1/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    console.log('controller', id);
    return this.tasksService.getTaskById(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
}
