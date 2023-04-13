import { randomUUID } from 'crypto'
import Task from '../../entities/Task'
import { CreateTaskInputDto, CreateTaskOutputDto } from './CreateTaskDto'
import TaskGateway from '../../gateways/TaskGateway'

export default class CreateTaskUseCase {
  private taskRepository: TaskGateway

  constructor(taskRepository: TaskGateway) {
    this.taskRepository = taskRepository
  }

  async execute(payload: CreateTaskInputDto): Promise<CreateTaskOutputDto> {
    const id = randomUUID()
    const task = new Task({
      id,
      description: payload.description,
      done: false,
    })
    await this.taskRepository.create(task)
    return task
  }
}