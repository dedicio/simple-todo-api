import ITask from '../../entities/ITask';
import Task from '../../entities/Task';
import TaskGateway from '../../gateways/TaskGateway';
import TaskModel from './TaskModel';

export default class TaskRepository implements TaskGateway {
  async create(task: Task): Promise<Task> {
    const data: ITask = {
      id: task.id,
      description: task.description,
      done: task.done,
    }
    const taskModel = new TaskModel(data)
    await taskModel.save()
    return task
  }
}