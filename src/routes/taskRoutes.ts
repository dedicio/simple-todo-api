import fp from 'fastify-plugin'
import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from 'fastify'
import TaskRepository from '../infra/db/TaskRepository'
import TaskController from '../web/controllers/taskController'

interface TaskPostPayload {
  description: string
}

const taskRoutes: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  const taskController = new TaskController(new TaskRepository())

  server.post<{ Body: TaskPostPayload }>('/', {}, async (req, res) => {
    const payload = { description: req.body.description }
    const task = await taskController.create(payload)
    res.code(201).send(task)
  })
}

export default fp(taskRoutes)
