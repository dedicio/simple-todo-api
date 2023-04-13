import Task from '../entities/Task';

export default interface TaskGateway {
  create(task: Task): Promise<Task>
}