// import { dirname, join } from 'path'
// import fastify from 'fastify'
// import autoload from '@fastify/autoload'


// const server = fastify()

// server.get('/', async (req, res) => {
//   return { hello: 'world' }
// })
// server.register(autoload, {
//   dir: path.join(__dirname, 'plugins')
// })
// server.listen(3000, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
//   console.log(`Server listening at ${address}`)
// })
// fastify full fledeged setup with logger postgres setup for a server
// Path: src/index.ts
import fastify from 'fastify'

const server = fastify()
