import { Repository, DataSource } from 'typeorm';
import { Task } from './task.entity';


export class TasksRepository extends Repository<Task> {

}
