import Task from '../../entities/Task';
import TaskGateway from '../../gateways/TaskGateway';
import CreateTaskUseCase from './CreateTaskUseCase';

class TaskGatewayMock implements TaskGateway {
  async create(task: Task): Promise<Task> {
    return task;
  }
}

describe('CreateTaskUseCase', () => {
  it('should create a task', async () => {
    const taskRepository = new TaskGatewayMock();
    const createTaskUseCase = new CreateTaskUseCase(taskRepository);
    const payload = { description: 'description' };
    
    const task = await createTaskUseCase.execute(payload);

    expect(task.id).toBeDefined();
    expect(task.description).toBe('description');
    expect(task.done).toBe(false);
  });
});