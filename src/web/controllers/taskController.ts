import TaskRepository from '../../infra/db/TaskRepository'
import { CreateTaskInputDto, CreateTaskOutputDto } from '../../useCases/createTaskUseCase/CreateTaskDto'
import CreateTaskUseCase from '../../useCases/createTaskUseCase/CreateTaskUseCase'

interface baseController {
  get(req: Request, res: Response): Promise<Response>
  getAll(req: Request, res: Response): Promise<Response>
  create(payload: any): Promise<any>
  update(req: Request, res: Response): Promise<Response>
  delete(req: Request, res: Response): Promise<Response>
}

export default class TaskController implements baseController {
  private taskRepository: TaskRepository

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }

  get(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  getAll(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  async create(payload: CreateTaskInputDto): Promise<CreateTaskOutputDto> {
    const createTaskUseCase = new CreateTaskUseCase(this.taskRepository)
    return createTaskUseCase.execute(payload)
  }

  update(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  delete(req: Request, res: Response): Promise<Response> {
    throw new Error('Method not implemented.')
  } 
}