import fastify from 'fastify'
import taskRoutes from './routes/taskRoutes'

const server = fastify()

server.get('/', async (request, reply) => {
  return 'It works! \n'
})

server.register(taskRoutes)

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})