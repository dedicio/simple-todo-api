export interface CreateTaskInputDto {
  description: string
}

export interface CreateTaskOutputDto {
  id: string
  description: string
  done: boolean
}
